import React, { useState } from "react";
import "./ErrorComp.css"; // Import a CSS file for styling
import CorruptedComponent from "./CorruptedComponent";

const ErrorComp = () => {
  const [isCrashed, setIsCrashed] = useState(false);

  const crashApp = () => {
    setIsCrashed(true);
  };

  const repairApp = () => {
    setIsCrashed(false);
  };

  return (
    <div className="ErrorComp">
      <h1>Welcome to Your App</h1>
      <p>Explore and have fun with our app!</p>
      <div className="button-container">
        <button type="button" onClick={isCrashed ? repairApp : crashApp}>
          {isCrashed ? "Repair App" : "Broke App"}
        </button>
      </div>
      {isCrashed && <CorruptedComponent />}
    </div>
  );
};
export default ErrorComp;
