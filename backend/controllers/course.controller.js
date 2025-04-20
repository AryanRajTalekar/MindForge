const { validationResult } = require('express-validator');
const courseService = require('../services/course.service');
const { uploadVideoToCloudinary } = require('../config/cloudinary');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // temporary local storage
const videoService = require('../services/video.service');


exports.upload = upload.array('videos');

exports.createCourse = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    let videoUrls = [];

    if (req.files && req.files.length > 0) {
        for (let file of req.files) {
          const videoUrl = await uploadVideoToCloudinary(file.path);
          videoUrls.push(videoUrl);
        }
      }

      const courseData = {
        ...req.body,
        videos: videoUrls,
      };


    const course = await courseService.createCourse(courseData);
    res.status(201).json(course);
      
  } catch (err) {
    res.status(500).json({ message: 'Failed to create course', error: err.message });
  }
};


exports.uploadVideosToCourse = async (req, res) => {
    const courseId = req.params.courseId;
  
    try {
      if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: 'No video files provided' });
      }
  
      const uploadedUrls = [];
  
      for (const file of req.files) {
        const updatedCourse = await videoService.addVideoToCourse(courseId, file.path);
        uploadedUrls.push(file.path); // Optional: add `updatedCourse.videos` if needed
      }
  
      res.status(200).json({
        message: 'Videos uploaded and added to course',
        uploadedVideos: uploadedUrls
      });
    } catch (err) {
      res.status(500).json({ message: 'Failed to upload videos', error: err.message });
    }
  };
  