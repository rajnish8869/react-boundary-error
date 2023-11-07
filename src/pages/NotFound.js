import React from "react";
import "./NotFound.css"; // Import a CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist.</p>
      <p>Let's get you back on track:</p>
      <ul>
        <li>Check the URL for typos or errors.</li>
        <li>
          Go back to the <a href="/">home page</a>.
        </li>
        <li>Contact our support team for assistance.</li>
      </ul>
    </div>
  );
};

export default NotFound;
