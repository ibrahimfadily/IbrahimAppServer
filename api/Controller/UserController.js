const app = require("../../App");

const bcrypt = require('bcrypt');
const userModule = require('../modules/user.module');

const Login = async (req, res) => {
  try {
    const { password, email } = req.body;

    const user = await userModule.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect email or password' });
    }

    res.status(200).json({ message: 'User login successfully', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const SignUp = async (req, res) => {
  try {
    const { password, username, email, phone } = req.body;

    const existingUser = await userModule.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Salt rounds = 10
    const newUser = await userModule.create({
      password: hashedPassword,
      username,
      email,
      phone: phone || null,
    });

    res.status(200).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updatepasswordByID  = async (req, res) => {
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
  updatepasswordByID ,
};
