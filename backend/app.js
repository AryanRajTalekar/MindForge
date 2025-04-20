const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const cors = require('cors');

const connectDB = require("./db/db");
const userRoutes = require("./Routes/user.route");


const instructorRoutes = require("./Routes/instructor.route");

const courseRoutes = require("./Routes/course.route");


connectDB();

app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.use('/users',userRoutes)
app.use('/instructors',instructorRoutes)
app.use('/courses',courseRoutes)


module.exports = app;