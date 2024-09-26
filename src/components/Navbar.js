import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import './Navbar.css';

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // State to manage navbar collapse
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  const handleLogout = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate a delay
      localStorage.removeItem('username');
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the navbar collapse state
  };

  return (
    <nav className="navbar navbar-expand-lg full-width-navbar">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">App Name</Link>
        <button
          className={`navbar-toggler ${isOpen ? 'collapsed' : ''}`} // Collapsed state for better transition
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarNav"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav align-items-center">
            {loading ? (
              <li className="nav-item">
                <Spinner animation="border" role="status" className="text-primary">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link to="/home" className="nav-link-btn home-btn">Home</Link>
                </li>
                {username ? (
                  <>
                    <li className="nav-item">
                      <Link to="/dashboard" className="nav-link-btn dashboard-btn">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add-employee" className="nav-link-btn add-employee-btn">Add Employee</Link>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link username-text">Hello, {username}</span>
                    </li>
                    <li className="nav-item">
                      <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link to="/login" className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signup" className="nav-link">Sign Up</Link>
                    </li>
                  </>
                )}
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
