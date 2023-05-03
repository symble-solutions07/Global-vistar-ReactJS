// const User = require("../models/User");
// const bcrypt = require("bcryptjs");


// const registerView = (req, res) => {
//   res.render("register", {});
// };

// const registerUser = (req, res) => {
//   const { email,phone, password, confirm } = req.body.values;
//   if ( !email || !password ) {
//     console.log("Fill empty fields");
//   }
//   //Confirm Passwords
//   if (password !== confirm) {
//     console.log("Password must match");
//   } else {
//     //Validation
//     User.findOne({ email: email }).then((user) => {
//       if (user) {
//         console.log("email exists");
//         res.render("register", {
//         email,
//         phone,
//         password,
//         confirm,
//         });
//       } else {
//         //Validation
//         const newUser = new User({
          
//             email,
//             phone,
//             password,
//         });
//         //Password Hashing
//         bcrypt.genSalt(10, (err, salt) =>
//           bcrypt.hash(newUser.password, salt, (err, hash) => {
//             if (err) throw err;
//             newUser.password = hash;
//             newUser
//               .save()
//               .then(res.redirect("/register"))
//               .catch((err) => console.log(err));
//           })
//         );
//       }
//     });
//   }
// };


// module.export = {
//     registerView,registerUser
// };