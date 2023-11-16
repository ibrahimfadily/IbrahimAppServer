const app = require("../../App");
const userModule = require("../modules/user.module");

const Login = (req, res) => {
  const { pass, username, email } = req.body;
  // ||
  // const findWith = username||email||phone ?? 
  userModule.findOne({
    username, email
  }).then((findOne) => {
    console.log(findOne);
    if (pass == findOne.pass) {
      res.status(200).json({ message: 'User login successfully', res: findOne });
    }
    else {
      res.status(401).json({ error: 'wrong password or user name' });
    }
  })
    .catch(e => {
      res.status(500).json({ error: e });
    })
  // res.status(200).json({message:"ok"})
}


const Register = (req, res) => {
  const {  pass, username, email } = req.body;

  userModule.create({
    pass,
    username,
    email,
    // phone
    
  }).then((createRes) => {
    res.status(200).json({ message: 'User registered successfully', res: createRes });

  })
    .catch(e => {
      res.status(404).json({ error: e });
    })
}

const updatepasswordByID = async (req, res) => {
  try {
    console.log(req.body);//ال req هو الطلب الذي نستعمله لكي نشغل العملية والذي لديه ال body الذي نعطيه اياه في الpostman
    const email = req.body.email
    // const updatepasswordData = req.body.updatepassword;
    const newPass = req.body.pass
    const updatepassword = await userModule.updateOne(
      { email: email },
      { $set: { pass: newPass } },
      { new: true }
    );
    console.log(updatepassword);
    if (!updatepassword.matchedCount) {
      return res.status(404).json({ message: "email not found" });
    } else {
      res.status(200).json({
        message: "done",
        ...updatepassword
      });
    }


  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// const uservalidation=(user)=>{
//   let validtions=validtion(user)
//   const values = Object.values(validtions);
//   for (const v of values) {
//     if (v !== "Valid") {
//       return v;
//     }
//   }
//   return "Valid";
// }


// const User = require('./models/User'); // Import the User model

// Endpoint for user registration
// app.post('/register', async (req, res) => {
//     try {
//         const { username, email, password } = req.body;
//         const newUser = new User({ username, email, password });
//         await newUser.save();
//         res.status(200).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(404).json({ error: error.message });
//     }
// });




// Register : async (req, res) => {
//   try {
//     // Get user input
//     const { email, password } = req.body;

//     // Validate user input
//     if (!(email && password)) {
//       res.status(404).json({ message: "All input is required" });
//     }
//     // check if user already exist
//     // Validate if user exist in our database
//     const oldUser = await userModule.findOne({ email });

//     if (oldUser) {
//       return res
//         .status(200)
//         .json({ message: "User Already Exist. Please Login" });
//     }
//     //Encrypt user password
//     encryptedPassword = await bcrypt.hash(password, 10);

//     // Create user in our database
//     const user = await userModule.create({
//       email: email.toLowerCase(), // sanitize: convert email to lowercase
//       password: encryptedPassword,
//     });

module.exports = {
  Login,
  Register,
  updatepasswordByID,
}


