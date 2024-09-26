import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';  // Import the Navbar component
import axios from 'axios';  // Import axios for fetching employee data
import './Dashboard.css';  // Import the CSS for styling

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const navigate = useNavigate();

  // Check if the user is logged in, otherwise redirect to login page
  useEffect(() => {
    const loggedInUser = localStorage.getItem('username');
    if (!loggedInUser) {
      navigate('/login');  // Redirect to login if no user is logged in
    } else {
      fetchEmployees();  // Fetch employees if user is logged in
    }
  }, [navigate]);

  // Fetch employees from API
  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/employees');
      setEmployees(response.data);  // Update the state with fetched employees
      setFilteredEmployees(response.data);  // Initialize filtered employees
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  // Filter employees based on search query
  useEffect(() => {
    const result = employees.filter(employee =>
      employee.f_Name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.f_Email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      employee.f_Designation.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredEmployees(result);
  }, [searchQuery, employees]);

  return (
    <>
      <Navbar />  {/* Add Navbar here */}
      <div className="dashboard-container">
        
        {/* Heading container */}
        <div className="heading-container">
          <h2 className="dashboard-title">Employee Dashboard</h2>
        </div>

        {/* Search container */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search by name, email, or designation"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Table displaying employees */}
        <div className="table-wrapper">
          <div className="table-container">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Mobile</th>
                  <th>Designation</th>
                  <th>Gender</th>
                  <th>Course</th>
                  <th>Image</th>
                </tr>
              </thead>
              <tbody>
                {filteredEmployees.length > 0 ? (
                  filteredEmployees.map((employee) => (
                    <tr key={employee.f_Id}>
                      <td data-label="ID">{employee.f_Id}</td>
                      <td data-label="Name">{employee.f_Name}</td>
                      <td data-label="Email">{employee.f_Email}</td>
                      <td data-label="Mobile">{employee.f_Mobile}</td>
                      <td data-label="Designation">{employee.f_Designation}</td>
                      <td data-label="Gender">{employee.f_gender}</td>
                      <td data-label="Course">{employee.f_Course}</td>
                      <td data-label="Image">
                        <img
                          src={employee.f_Image}
                          alt={employee.f_Name}
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="text-center">No employees found</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
