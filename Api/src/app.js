const express = require("express");
let cors = require("cors");
const morgan = require("morgan");
const route = require('./Routes/index');
const mongoose = require("mongoose");

require("dotenv").config();
const app = express();

mongoose.set('strictQuery', true)
// Middleware
app.use(cors());
app.use(express.json())
// app.use(express.json());
// app.use(morgan("dev"));


app.use("/api",route)


module.exports ={
    app
}
