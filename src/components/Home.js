import React from 'react';
import Navbar from './Navbar'; // Import the Navbar
import './Home.css'; // Import custom CSS for Home component

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className="hero-section">
        <div className="home-container">
          <h1 className="display-4">Welcome to the Employee Management System</h1>
          <p className="lead intro-text">
            This platform allows you to manage employee details efficiently. Navigate through the sections using the links in the navigation bar above.
          </p>
          <p className="additional-info">
            Whether you're adding new employees, reviewing existing records, or accessing detailed analytics, everything is just a click away.
            Make sure to log in to access all features and start managing employee data seamlessly.
          </p>
        </div>
        <section className="quotes">
        <blockquote>
          <p>"This platform has transformed the way we manage employee data, making everything so much easier."</p>
        </blockquote>
      </section>
      </section>
    </div>
  );
};

export default Home;
