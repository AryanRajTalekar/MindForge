const instructorModel = require('../models/instructor.model');



module.exports.createInstructor = async (username, email, password) => {
    if(!username || !email || !password){
        throw new Error("All fields are required")
    }
    const instructor = instructorModel.create({
        username,
        email,
        password
})

return instructor;

}