const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config(); // For using environment variables

const app = express();

// Enable CORS and JSON request parsing
app.use(cors());
app.use(express.json());

// MongoDB Connection
const mongoUri = process.env.MONGO_URI || 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// User schema and model for authentication
const userSchema = new mongoose.Schema({
  f_userName: { type: String, required: true, unique: true },
  f_Pwd: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Employee schema and model for managing employees
const employeeSchema = new mongoose.Schema({
  f_Id: { type: Number, required: true, unique: true },
  f_Name: { type: String, required: true },
  f_Email: { type: String, required: true },
  f_Mobile: { type: String, required: true },
  f_Designation: { type: String, required: true },
  f_gender: { type: String },
  f_Course: { type: String },
  f_Image: { type: String },
  f_Createdate: { type: Date, default: Date.now }
});

const Employee = mongoose.model('Employee', employeeSchema);

// Function to generate the next employee ID starting from 1
const generateNextEmployeeId = async () => {
  const lastEmployee = await Employee.findOne().sort({ f_Id: -1 }); // Get the employee with the highest f_Id
  return lastEmployee ? lastEmployee.f_Id + 1 : 1; // If no employee exists, start from 1
};

// Signup API
app.post('/api/signup', async (req, res) => {
  const { f_userName, f_Pwd } = req.body;

  // Validate required fields
  if (!f_userName || !f_Pwd) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    // Check if the username already exists
    const existingUser = await User.findOne({ f_userName });
    if (existingUser) {
      return res.status(400).json({ error: 'Username already exists' });
    }

    // Add the new user to the database
    const newUser = new User({ f_userName, f_Pwd });
    await newUser.save();

    console.log('New user registered:', { f_userName });
    res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).json({ error: 'Server error during signup' });
  }
});

// Login API
app.post('/api/login', async (req, res) => {
  const { f_userName, f_Pwd } = req.body;

  // Validate required fields
  if (!f_userName || !f_Pwd) {
    return res.status(400).json({ error: 'Username and password are required.' });
  }

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ f_userName });

    // Validate user and password
    if (!user || user.f_Pwd !== f_Pwd) {
      console.log('Invalid login attempt for user:', f_userName);
      return res.status(400).json({ error: 'Invalid login details' });
    }

    console.log('Login successful for user:', f_userName);
    res.json({ message: 'Login successful' });
  } catch (err) {
    console.error('Error during login:', err);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// Add Employee API
app.post('/api/add-employee', async (req, res) => {
  const { f_Name, f_Email, f_Mobile, f_Designation, f_gender, f_Course, f_Image } = req.body;

  // Validate required fields
  if (!f_Name || !f_Email || !f_Mobile || !f_Designation || !f_gender || !f_Course || !f_Image) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    // Generate the next employee ID
    const f_Id = await generateNextEmployeeId(); // Ensure IDs start from 1 and increment sequentially

    const newEmployee = new Employee({
      f_Id,
      f_Name,
      f_Email,
      f_Mobile,
      f_Designation,
      f_gender,
      f_Course,
      f_Image,
    });
    await newEmployee.save();
    res.status(201).json({ message: 'Employee added successfully', employee: newEmployee });
  } catch (err) {
    console.error('Error adding employee:', err);
    res.status(500).json({ error: 'Server error while adding employee' });
  }
});

// Get All Employees API
app.get('/api/employees', async (req, res) => {
  try {
    const employees = await Employee.find(); // Fetch all employees
    res.json(employees);
  } catch (err) {
    console.error('Error fetching employees:', err);
    res.status(500).json({ error: 'Server error while fetching employees' });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));