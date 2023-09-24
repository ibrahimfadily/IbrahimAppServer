const express = require ("express");
const mongoose = require ("mongoose");
const StudentModule = require("./api/modules/student.module");
const Routs = require("./api/routs/Routs");



const app = express();
app.use(express.json());
app.use('/' , Routs)

const mongooseLink ="mongodb+srv://ibrahemfdela67:dalhom@cluster0.ezukhvp.mongodb.net/"
//ibrahemfdela67
mongoose.connect (mongooseLink);
mongoose.connection.on("connected", () =>  {
console.log("mongo connected");
});

import { UserRegistration } from "./UserRegistration";
/*
Your functions here
*/
return (
  <>
    <StatusBar />
    <SafeAreaView style={styles.container}>
      <>
        <Text style={styles.title}>React Native on Back4App</Text>
        <Text>User registration tutorial</Text>
        <UserRegistration />
      </>
    </SafeAreaView>
  </>
);

// Remember to add some styles at the end of your file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
// // http://localhost:7000/app
// app.get("/app",(req,res)=>{
//     res.status(200).json({
//         message:"no",
//         mnsaf:"50kg",
//     });
// });


// // app.get("/app", (req, res) => {
// //   res.status(200).json({
// //     message: "yes",
// //     batata: "5kg",
// //   });
// // });

// app.post("/creatNewStudent", (req, res) => {
//   StudentModule.create({
//     name: req.body.name,
//     id: req.body.id,
//   }).then((response) => {
//     res.status(200).json({
//       message: "done",
//     });
//   }).catch(e=>{
//     res.status(500).json({message:'error'})
//   });
// });

// app.get("/getAllUsers",  (req, res) => {
//   // try {
//   //   const allUsers = await StudentModule.find();
//   // } catch (error) {
//   //   console.log("get all students error: ", e);
//   // }
//   StudentModule.find()
//     .then((stRes) => {
//       console.log("");
//       res.status(200).json({
//         message: "done",
//         users: stRes,
//       });
//     })
//     .catch((e) => {
//       console.log("get all students error: ", e);
//       res.status(500).json({error: true , errorMessage: e})
//     });
// });

// app.post('/getUserByName' , (req , res) => {
//   StudentModule.find({name:req.body.name})
//   .then(students => {
//     res.status(200).json(students)
//   })
// })

// module.exports = app;