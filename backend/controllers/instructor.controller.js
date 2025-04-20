const instructorService = require('../services/instructor.service');
const instructorModel = require('../models/instructor.model');
const { validationResult } = require('express-validator');



module.exports.registerInstructor = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { username, email, password } = req.body;

     // Hash the password before saving
        const hashedPassword = await instructorModel.hashPassword(password);
    
        // Create user
        const instructor = await instructorService.createInstructor(username, email, hashedPassword);
    
        // Generate the authentication token
        const token = await instructor.generateAuthToken();
    
        res.status(201).json({ token, instructor });
}