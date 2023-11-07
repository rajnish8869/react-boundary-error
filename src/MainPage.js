import React from "react";
import "./MainPage.css"; // Import a CSS file for styling
import HomePage from "./pages/HomePage";
import ErrorComp from "./pages/ErrorComp"; // Assuming the correct import path
const MainPage = () => {
  return (
    <div className="MainPage">
      <h1>Welcome to Our React App</h1>
      <p>Explore the features of our app.</p>
      <div className="content-container">
        <div className="home-page-container">
          <HomePage />
        </div>
        <div className="error-page-container">
          <ErrorComp />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
