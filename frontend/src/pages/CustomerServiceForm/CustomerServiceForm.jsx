import React, { useState } from "react";
import "./CustomerServiceForm.css";

const CustomerServiceForm = ({ onSubmit }) => {
  const [category, setCategory] = useState("General Queries");
  const [comments, setComments] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ category, comments });
    setCategory("General Queries");
    setComments("");
  };

  return (
    <div className="customer-service-form">
      <h2>Customer Service Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputGroup">
          <label className="label">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
          >
            <option value="General Queries">General Queries</option>
            <option value="Product Features Queries">Product Features Queries</option>
            <option value="Product Pricing Queries">Product Pricing Queries</option>
            <option value="Product Feature Implementation Requests">Product Feature Implementation Requests</option>
          </select>
        </div>
        <div className="inputGroup">
          <label className="label">Comments</label>
          <textarea
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            placeholder="Enter your comments"
            className="input"
          ></textarea>
        </div>
        <button type="submit" className="submitButton">Submit</button>
      </form>
    </div>
  );
};

export default CustomerServiceForm;
