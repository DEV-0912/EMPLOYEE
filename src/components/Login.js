import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import './login.css'; // Custom CSS file for additional styling
import Navbar from './Navbar'; // Import the Navbar component

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        f_userName: username,
        f_Pwd: password,
      });

      // Handle successful login
      setErrorMessage('');
      console.log('Login successful', response.data);

      // Store the logged-in username in localStorage
      localStorage.setItem('username', username);

      // Redirect to the home page after login
      navigate('/home');
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Server error');
      }
    }
  };

  return (
    <>
      {/* Add Navbar at the top */}
      <Navbar />

      {/* Login form */}
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light custom-bg">
        <div className="card p-4 shadow-lg border-0 rounded custom-card">
          <h2 className="text-center mb-4 text-primary">Login to Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="form-label text-dark">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter your username"
              />
            </div>
            <div className="form-group mb-3">
              <label className="form-label text-dark">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
            </div>
            {errorMessage && <p className="text-danger">{errorMessage}</p>}
            <button type="submit" className="btn btn-primary w-100">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
