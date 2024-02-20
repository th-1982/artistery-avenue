import React from "react";
import appStyles from "../../App.module.css";

// ContactSuccessForm Component
const ContactSuccessForm = () => {
  // ContactSuccessForm Structure
  return (
    <div
      className={`${appStyles.Content} p-4 mt-2 text-center d-flex flex-column align-items-center`}
    >
      <i className="fa-solid fa-envelope-open-text"></i>
      <h1>Thank you for reaching out to us!</h1>
      <p>One of our staff members will get back to you soon.</p>
    </div>
  );
};

export default ContactSuccessForm;