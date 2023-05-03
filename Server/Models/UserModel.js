const mongoose = require("mongoose");
const ManufacturerSchema = new mongoose.Schema({
  manufacturer_email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
    
const DistributorSchema = new mongoose.Schema({
  distributor_email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});



const Manufacturer  = mongoose.model("Manufacturer", ManufacturerSchema);
const Distributor = mongoose.model("Distributor", DistributorSchema);

console.log(Manufacturer);
console.log("man ");
console.log(Distributor);
console.log("dis");

module.exports = { Manufacturer, Distributor};

