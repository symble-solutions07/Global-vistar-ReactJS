const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const { Manufacturer, Distributor } = require("./Models/UserModel");


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://atharvakurumbhatte47:Arnav%40123@cluster0.mvf1iuj.mongodb.net/Global-Vistar?retryWrites=true&w=majority"
  );
  console.log("db connected");

  
}



const server = express();

server.use(cors());
server.use(bodyParser.json());

server.use(require("./Routes/UserRouter"));




server.listen(8080, () => {
  console.log("server started");
});
