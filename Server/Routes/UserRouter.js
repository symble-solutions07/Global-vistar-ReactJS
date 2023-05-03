const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const { Manufacturer, Distributor} = require("../Models/UserModel");




router.get("/",(req, res) => {
    res.send("hello");
    // res.json({ message: req.body.phone });
})

router.post("/registerDistributor", async (req, res) => {
  const newPassword = await bcrypt.hash(req.body.values.password, 10);
  console.log(req.body);

  try {
    await Distributor.create({
      distributor_email: req.body.values.distributor_email,
      phone: req.body.values.phone,
      name: req.body.values.name,
      password: newPassword,
      
    });
    res.json({ status: "ok" });
  } catch (err) {
    console.log(err);
    // res.json({status: 'error', error: 'duplicate email'})
  }
});


router.post("/registerManufacturer", async (req, res) => {
  console.log(req.body);
  const newPassword = await bcrypt.hash(req.body.values.password, 10);
  console.log(req.body);

  try {
    await Manufacturer.create({
      manufacturer_email: req.body.values.manufacturer_email,
      phone: req.body.values.phone,
      name: req.body.values.name,
      password: newPassword,
    });
    res.json({ status: "ok" });
    console.log("data saved");
  } catch (err) {
    console.log(err);
    // res.json({status: 'error', error: 'duplicate email'})
  }
});





// router.post("/login", async (req, res) => {
//   console.log(req.body);
  
//   const user = await Manufacturer.findOne({
//     manufacturer_email: req.body.values.email,
//   });
//   console.log(user);
//   if (user) {
//     console.log(user);
//     return res.json({ status: "logged in...", user: true });
//   } else {
//     return res.json({ status: "error", user: false });
//   }
// });

// router.post("/loginDistributor", async (req, res) => {
//   console.log(req.body);
//   const user = await Distributor.findOne({
//     distributor_email: req.body.values.email,
//   });
//   console.log(user);
//   if (user) {
//     console.log(user);
//     return res.json({ status: "logged in...", user: true });
//   } else {
//     return res.json({ status: "error", user: false });
//   }
// });



module.exports = router;