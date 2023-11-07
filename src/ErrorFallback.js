import React from "react";
import "./ErrorFallback.css"; // Import a CSS file for styling

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="error-fallback">
      <h3>Oops, something went wrong</h3>
      <p>An error occurred: {error.message}</p>
      <button onClick={resetErrorBoundary}>Try Again</button>
    </div>
  );
};
export default ErrorFallback;
