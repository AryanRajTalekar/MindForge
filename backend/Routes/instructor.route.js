const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const instructorController = require("../controllers/instructor.controller");



router.post("/register",[
    body("username").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Email is required"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long"),
],

instructorController.registerInstructor

);


module.exports  = router;