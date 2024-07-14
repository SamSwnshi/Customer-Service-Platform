import { useEffect,useState } from "react";
import { useUser } from "../../context/UserContext";
import Intercom from '@intercom/messenger-js-sdk';
import CustomerServiceForm from "../CustomerServiceForm/CustomerServiceForm";
import CustomerServiceRequests from "../CustomerServiceRequest/CustomerServiceRequest";
const Dashboard = () => {
  const { user } = useUser();
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    if (user) {
      Intercom('boot', {
        app_id: 'ne0pdxng',
        user_id: user.id, // Use the actual user ID from context
        name: user.name, // Use the actual user name from context
        email: user.email, // Use the actual user email from context
        created_at: Math.floor(new Date(user.createdAt).getTime() / 1000), // Use actual created timestamp
      });
    }
  }, [user]);


  const handleFormSubmit = (newRequest) => {
    setRequests([...requests, newRequest]);
  };


  return (
    <div>
    
      <CustomerServiceForm onSubmit={handleFormSubmit} />
      {/* <CustomerServiceRequests requests={requests} /> */}
    </div>
  );
};

export default Dashboard;
