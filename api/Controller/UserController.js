const app = require("../../App");
const bcrypt = require('bcrypt');
const userModule = require('../modules/user.module');



const SignUp = async (req, res) => {
  try {
    const { pass, username, email } = req.body;

    // Check if the password is provided
    if (!pass) {
      return res.status(400).json({ error: 'Password is required' });
    }

    // Check if a user with the provided email already exists
    const existingUser = await userModule.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Create a new user with the provided information
    const newUser = await userModule.create({
      pass,         // User's password
      username,     // User's username
      email        // User's email
    });

    // Send a success response with the newly created user data
    res.status(200).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    // Handle any errors that occur during the registration process
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
const Login = async (req, res) => {
  try {
    // Ensure both email and password are provided
    const { password, email } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user by email
    const user = await userModule.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.pass);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Successful login
    res.status(200).json({ message: 'User login successfully', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updatepasswordByID = async (req, res) => {
  try {
    const { email, newPassword } = req.body;

    const hashedPassword = await bcrypt.hash(newPassword, 10); // Salt rounds = 10
    const updatedUser = await userModule.updateOne(
      { email },
      { $set: { password: hashedPassword } }
    );

    if (!updatedUser || updatedUser.nModified === 0) {
      return res.status(404).json({ error: 'Email not found' });
    }

    res.status(200).json({ message: 'Password changed successfully' });
  } catch (error) {
    console.error('Update password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  Login,
  SignUp,
  updatepasswordByID,
};
