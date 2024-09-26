// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import Navbar from './Navbar'; // Include Navbar

// // const AddEmployee = () => {
// //   const [name, setName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [mobile, setMobile] = useState('');
// //   const [designation, setDesignation] = useState('');
// //   const [gender, setGender] = useState('');
// //   const [course, setCourse] = useState('');
// //   const [image, setImage] = useState('');
// //   const [successMessage, setSuccessMessage] = useState('');
// //   const [errorMessage, setErrorMessage] = useState('');

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     // Prepare employee data
// //     const employeeData = {
// //       f_Id: Math.floor(Math.random() * 10000), // A simple ID generator for now, ideally use backend-generated IDs
// //       f_Name: name,
// //       f_Email: email,
// //       f_Mobile: mobile,
// //       f_Designation: designation,
// //       f_gender: gender,
// //       f_Course: course,
// //       f_Image: image,
// //     };

// //     try {
// //       // Send employee data to the backend
// //       const response = await axios.post('http://localhost:5000/api/add-employee', employeeData);

// //       // Handle successful employee creation
// //       setSuccessMessage('Employee added successfully');
// //       setErrorMessage('');
// //       // Clear the form fields
// //       setName('');
// //       setEmail('');
// //       setMobile('');
// //       setDesignation('');
// //       setGender('');
// //       setCourse('');
// //       setImage('');
// //     } catch (error) {
// //       // Handle error
// //       if (error.response) {
// //         setErrorMessage(error.response.data.error);
// //       } else {
// //         setErrorMessage('Server error');
// //       }
// //       setSuccessMessage('');
// //     }
// //   };

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="container mt-5">
// //         <h2>Add Employee</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="mb-3">
// //             <label className="form-label">Name</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={name}
// //               onChange={(e) => setName(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Email</label>
// //             <input
// //               type="email"
// //               className="form-control"
// //               value={email}
// //               onChange={(e) => setEmail(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Mobile</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={mobile}
// //               onChange={(e) => setMobile(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Designation</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={designation}
// //               onChange={(e) => setDesignation(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Gender</label>
// //             <select
// //               className="form-control"
// //               value={gender}
// //               onChange={(e) => setGender(e.target.value)}
// //               required
// //             >
// //               <option value="">Select Gender</option>
// //               <option value="Male">Male</option>
// //               <option value="Female">Female</option>
// //               <option value="Other">Other</option>
// //             </select>
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Course</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={course}
// //               onChange={(e) => setCourse(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <div className="mb-3">
// //             <label className="form-label">Image URL</label>
// //             <input
// //               type="text"
// //               className="form-control"
// //               value={image}
// //               onChange={(e) => setImage(e.target.value)}
// //               required
// //             />
// //           </div>
// //           <button type="submit" className="btn btn-primary">Add Employee</button>
// //         </form>

// //         {/* Success or Error Messages */}
// //         {successMessage && <p className="text-success mt-3">{successMessage}</p>}
// //         {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AddEmployee;
// import React, { useState } from 'react';
// import axios from 'axios';
// import Navbar from './Navbar'; // Include Navbar

// import './AddEmployee.css';
// const AddEmployee = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [mobile, setMobile] = useState('');
//   const [designation, setDesignation] = useState('');
//   const [gender, setGender] = useState('');
//   const [course, setCourse] = useState('');
//   const [image, setImage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare employee data
//     const employeeData = {
//       f_Id: Math.floor(Math.random() * 10000), // A simple ID generator for now, ideally use backend-generated IDs
//       f_Name: name,
//       f_Email: email,
//       f_Mobile: mobile,
//       f_Designation: designation,
//       f_gender: gender,
//       f_Course: course,
//       f_Image: image,
//     };

//     try {
//       // Send employee data to the backend
//       const response = await axios.post('http://localhost:5000/api/add-employee', employeeData);

//       // Handle successful employee creation
//       setSuccessMessage('Employee added successfully');
//       setErrorMessage('');
//       // Clear the form fields
//       setName('');
//       setEmail('');
//       setMobile('');
//       setDesignation('');
//       setGender('');
//       setCourse('');
//       setImage('');
//     } catch (error) {
//       // Handle error
//       if (error.response) {
//         setErrorMessage(error.response.data.error);
//       } else {
//         setErrorMessage('Server error');
//       }
//       setSuccessMessage('');
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className='car'>
//         <h2>Add Employee</h2>
//         {successMessage && <div className="alert alert-success">{successMessage}</div>}
//         {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
//         <form onSubmit={handleSubmit} className="custom-card p-4 mx-auto">
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input
//               type="text"
//               id="name"
//               className="form-control"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="form-control"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="mobile" className="form-label">Mobile</label>
//             <input
//               type="text"
//               id="mobile"
//               className="form-control"
//               value={mobile}
//               onChange={(e) => setMobile(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="designation" className="form-label">Designation</label>
//             <input
//               type="text"
//               id="designation"
//               className="form-control"
//               value={designation}
//               onChange={(e) => setDesignation(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="gender" className="form-label">Gender</label>
//             <select
//               id="gender"
//               className="form-select"
//               value={gender}
//               onChange={(e) => setGender(e.target.value)}
//               required
//             >
//               <option value="">Select Gender</option>
//               <option value="Male">Male</option>
//               <option value="Female">Female</option>
//               <option value="Other">Other</option>
//             </select>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="course" className="form-label">Course</label>
//             <input
//               type="text"
//               id="course"
//               className="form-control"
//               value={course}
//               onChange={(e) => setCourse(e.target.value)}
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="image" className="form-label">Image URL</label>
//             <input
//               type="text"
//               id="image"
//               className="form-control"
//               value={image}
//               onChange={(e) => setImage(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">Add Employee</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddEmployee;
import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar'; // Include Navbar

import './AddEmployee.css'; // Add necessary CSS styles

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [designation, setDesignation] = useState('');
  const [gender, setGender] = useState('');
  const [course, setCourse] = useState([]);
  const [image, setImage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCourseChange = (e) => {
    const value = e.target.value;
    setCourse((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare employee data
    const employeeData = {
      f_Id: Math.floor(Math.random() * 10000), // A simple ID generator for now, ideally use backend-generated IDs
      f_Name: name,
      f_Email: email,
      f_Mobile: mobile,
      f_Designation: designation,
      f_gender: gender,
      f_Course: course.join(', '),
      f_Image: image,
    };

    try {
      // Send employee data to the backend
      const response = await axios.post('http://localhost:5000/api/add-employee', employeeData);

      // Handle successful employee creation
      setSuccessMessage('Employee added successfully');
      setErrorMessage('');
      // Clear the form fields
      setName('');
      setEmail('');
      setMobile('');
      setDesignation('');
      setGender('');
      setCourse([]);
      setImage('');
    } catch (error) {
      // Handle error
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage('Server error');
      }
      setSuccessMessage('');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container mt-5 car">
        <h2>Create Employee</h2>
        {successMessage && <div className="alert alert-success">{successMessage}</div>}
        {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
        
        <form onSubmit={handleSubmit} className="custom-card p-4 mx-auto">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="mobile" className="form-label">Mobile</label>
            <input
              type="text"
              id="mobile"
              className="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="designation" className="form-label">Designation</label>
            <select
              id="designation"
              className="form-control"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              required
            >
              <option value="">Select Designation</option>
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Gender</label>
            <div>
              <label className="me-3">
                <input
                  type="radio"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={(e) => setGender(e.target.value)}
                />{' '}
                Male
              </label>
              <label className="me-3">
                <input
                  type="radio"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={(e) => setGender(e.target.value)}
                />{' '}
                Female
              </label>
              <label>
                <input
                  type="radio"
                  value="Other"
                  checked={gender === 'Other'}
                  onChange={(e) => setGender(e.target.value)}
                />{' '}
                Other
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Course</label>
            <div>
              <label className="me-3">
                <input
                  type="checkbox"
                  value="MCA"
                  checked={course.includes('MCA')}
                  onChange={handleCourseChange}
                />{' '}
                MCA
              </label>
              <label className="me-3">
                <input
                  type="checkbox"
                  value="BCA"
                  checked={course.includes('BCA')}
                  onChange={handleCourseChange}
                />{' '}
                BCA
              </label>
              <label>
                <input
                  type="checkbox"
                  value="BSC"
                  checked={course.includes('BSC')}
                  onChange={handleCourseChange}
                />{' '}
                BSC
              </label>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input
              type="text"
              id="image"
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
