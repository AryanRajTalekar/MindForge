const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
    user_id:{
        type:String,
        default: uuidv4
    },
    username:{
        type:String,
        required:true,
        unique:true,
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
    }
},{timestamps:true})



UserSchema.methods.generateAuthToken = async function(){
    const token = jsonwebtoken.sign({user_id:this.user_id},process.env.JWT_secret_key,{expiresIn:'2h'});
    return token;
}


UserSchema.methods.ComparePasswords = async function(password){
    return await bcrypt.compare(password,this.password);
}


UserSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password,10);
}
    



const UserModel= mongoose.model('User',UserSchema);

module.exports = UserModel;