// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Login from './components/Login';
// import Home from './components/Home'; // Import Home component
// import Dashboard from './components/Dashboard'; // You need to create this component
// import AddEmployee from './components/AddEmployee'; // You need to create this component

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/add-employee" element={<AddEmployee />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/Signup'; // Import SignUp component
import Home from './components/Home'; // Import Home component
import Dashboard from './components/Dashboard'; // Import Dashboard component
import AddEmployee from './components/AddEmployee'; // Import AddEmployee component
import HomePage from './components/HomePage'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-employee" element={<AddEmployee />} />
      </Routes>
    </Router>
  );
}

export default App;
