const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const contactRoute=require("./router/contactRoute")
const emailRoute = require("./router/emailRoute")


app.use("/contact",contactRoute);
app.use("/email",emailRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(process.env.PORT);
      console.log("Connected to db");
    });
  })
  .catch((error) => {
    console.log(error);
  });
