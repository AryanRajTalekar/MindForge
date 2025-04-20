const Course = require('../models/course.model');
const { uploadVideoToCloudinary } = require('../config/cloudinary');

exports.addVideoToCourse = async (courseId, filePath) => {
  const videoUrl = await uploadVideoToCloudinary(filePath);
  const course = await Course.findById(courseId);
  course.videos.push(videoUrl);
  await course.save();
  return course;
};
