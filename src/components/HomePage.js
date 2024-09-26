import React from 'react';
import Navbar from './Navbar';
import './HomePage.css';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <header className="hero-section text-center py-5">
        <h1 className="display-4">Welcome to Our Employment Platform</h1>
        <p className="lead mt-4">Connecting talent with opportunity.</p>
        <div className="quotes mt-5">
          <blockquote className="blockquote">
            <p className="mb-0">“The future depends on what you do today.” – Mahatma Gandhi</p>
          </blockquote>
          <blockquote className="blockquote mt-4">
            <p className="mb-0">“Opportunities don't happen, you create them.” – Chris Grosser</p>
          </blockquote>
          <blockquote className="blockquote mt-4">
            <p className="mb-0">“The best way to predict the future is to invent it.” – Alan Kay</p>
          </blockquote>
        </div>
      </header>
    </div>
  );
};

export default HomePage;
