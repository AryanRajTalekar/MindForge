const express = require('express');
const { body } = require('express-validator');
const courseController = require('../controllers/course.controller');

const router = express.Router();

router.post(
  '/create-course',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('instructor').notEmpty().withMessage('Instructor ID is required')
  ],
  courseController.createCourse
);



router.post(
  '/:courseId/upload',
  courseController.upload,  
  courseController.uploadVideosToCourse
);



module.exports = router;
