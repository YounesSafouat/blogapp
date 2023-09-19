const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
app.use(express.json());
//!PORT of the app
const PORT = process.env.PORT || 4000;
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
mongoose.connect("mongodb://127.0.0.1:27017/arkx").then(() => {
  app.listen(PORT, () => {
    console.log(`your website is http://localhost:${PORT}`);
  });
  console.log("connected to mongo db");
});
//!--------------------------------------
const PostRouter = require('./routes/web')
app.use('/',PostRouter)