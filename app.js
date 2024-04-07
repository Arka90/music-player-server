const dotenv = require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const musicRoute = require("./routes/musicRoutes")
const albumRoute = require('./routes/albumRoutes')
const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("Connected to DB");
})


app.use("/uploads", express.static("./uploads"))
app.use("/api/v1/album", albumRoute);
app.use("/api/v1/musics", musicRoute);



module.exports = app;