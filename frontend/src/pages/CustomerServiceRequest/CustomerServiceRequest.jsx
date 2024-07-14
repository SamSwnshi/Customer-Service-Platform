import React from "react";
import "./ServiceRequest.css";

const CustomerServiceRequests = ({ requests }) => {
  return (
    <div className="customer-service-requests">
      <h2>Customer Service Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        requests.map((request, index) => (
          <div key={index} className="request">
            <p><strong>Category:</strong> {request.category}</p>
            <p><strong>Comments:</strong> {request.comments}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default CustomerServiceRequests;
