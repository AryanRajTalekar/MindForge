const mongoose = require('mongoose');


function connectDB() {
    mongoose.connect(process.env.DB_URL).then(()=>{
        console.log("MongoDB connected successfully")
    }).catch((error)=>{
        console.log("MongoDB connection failed",error.message);
    })
}

module.exports = connectDB;