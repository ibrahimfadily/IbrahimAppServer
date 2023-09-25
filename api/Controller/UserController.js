const userModule = require("../modules/user.module");

const Login = (req, res) => {

res.status(200).json({message:"ok"})

}

const Register =(req , res) => {
  const {cars,phone , card , pass , username , email } = req.body ; 

  userModule.create({
    cars , 
    phone , 
    card ,
    pass , 
    username , 
    email ,  
  }).then(createRes => {
    res.status(200).json({ message: 'User registered successfully' });
    res.status(404).json({ error: error.message });
  })

}

module.exports = {
  Login,
  Register
}
// }
// }
// }
