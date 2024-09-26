import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Navbar from './Navbar'; // Import the Navbar component

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // Use navigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        f_userName: username,
        f_Pwd: password
      });

      // Handle successful sign-up
      setErrorMessage('');
      console.log('Sign up successful', response.data);

      // Redirect to the login page
      navigate('/login');
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
      {/* Add Navbar */}
      <Navbar />

      {/* Signup form */}
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light custom-bg">
        <div className="card p-4 shadow-lg border-0 rounded custom-card">
          <h2 className="text-center mb-4 text-primary">Create an Account</h2>
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
            <div className="form-group mb-3">
              <label className="form-label text-dark">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm your password"
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Sign Up</button>
            {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
          </form>
          <p className="mt-3 text-center">
            Already have an account? <a href="/login">Login here</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
