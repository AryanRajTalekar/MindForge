const JsonWebToken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const {v4:UUID} = require('uuid');


const InstructorSchmema = new mongoose.Schema({
    intrustor_id:{
        type:String,
        default:UUID()
    },
    username:{
        type:String,
        required:true,
        minlength:[3,"Username must be at least 3 characters long"],
        maxlength:[20,"Username must be at most 20 characters long"],
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        minlength:[5,"Email must be at least 5 characters long"],
    },
    password:{
        type:String,
        required:true,
        select:false,
    },
    socketId:{
        type:String,
        default:null
    },
    
},{timestamps:true})

InstructorSchmema.methods.generateAuthToken = async function(){
    const token = JsonWebToken.sign({user_id:this.user_id},process.env.JWT_secret_key,{expiresIn:'2h'});
    return token;
}


InstructorSchmema.methods.ComparePasswords = async function(password){
    return await bcrypt.compare(password,this.password);
}


InstructorSchmema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}

const InstructorModel = mongoose.model('Instructor',InstructorSchmema);

module.exports = InstructorModel;