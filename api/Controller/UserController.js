const app = require("../../App");
const userModule = require("../modules/user.module");

const Login = async (req, res) => {
  try {
    const { pass, username, email } = req.body;

    const user = await userModule.findOne({ $or: [{ username }, { email }] });
    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    if (pass !== user.pass) {
      return res.status(401).json({ error: 'Wrong password or username' });
    }

    res.status(200).json({ message: 'User login successfully', user });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const SignUp = async (req, res) => {
  try {
    const { pass, username, email, phone } = req.body;

    const existingUser = await userModule.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: 'User already exists' });
    }

    const newUser = await userModule.create({
      pass,
      username,
      email,
      phone: phone || null // Set phone to null if not provided
    });

    res.status(200).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Register error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



const updatepasswordByID = async (req, res) => {
  try {
    const { email, pass } = req.body;

    const updatedUser = await userModule.updateOne(
      { email },
      { $set: { pass } }
    );

    if (!updatedUser.nModified) {
      return res.status(404).json({ error: "Email not found" });
    }

    res.status(200).json({ message: "Password changed successfully" });
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
