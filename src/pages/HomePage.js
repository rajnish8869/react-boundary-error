import React from "react";
import "./HomePage.css"; // Import a CSS file for styling

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Our Website</h1>
      <p>Explore our exciting content and services.</p>
      <div className="feature">
        <h2>Featured Content</h2>
        <p>Check out our latest articles and videos.</p>
        <a href="/featured">See More</a>
      </div>
      <div className="subscribe">
        <h2>Subscribe to Updates</h2>
        <p>Stay up to date with our newsletter.</p>
        <a href="/subscribe">Subscribe Now</a>
      </div>
    </div>
  );
};

export default HomePage;
