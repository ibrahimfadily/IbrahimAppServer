const app = require("../../App");
const userModule = require("../odules/userModule");

const Login = (req, res) => {

res.status(200).json({message:"ok"})

}

const Register =(req , res) => {
  const {phone, pass , username , email} = req.body ; 

  userModule.create({
    pass , 
    username , 
    email ,  
    phone,
  }).then( (createRes) => {
    res.status(200).json({ message: 'User registered successfully' , res: createRes });
  
  })
  .catch(e => {
    res.status(404).json({ error: e });
  })

}
const User = require('./models/User'); // Import the User model

// Endpoint for user registration
app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
});




Register : async (req, res) => {
  try {
    // Get user input
    const { email, password } = req.body;
  
    // Validate user input
    if (!(email && password)) {
      res.status(404).json({ message: "All input is required" });
    }
    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await userModule.findOne({ email });

    if (oldUser) {
      return res
        .status(200)
        .json({ message: "User Already Exist. Please Login" });
    }
    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await userModule.create({
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
    });
  
module.exports = {
  Login,
  Register,
}
}
}


