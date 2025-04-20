const Course = require('../models/course.model');

exports.createCourse = async (data) => {
  return await Course.createCourse(data);
};

exports.getCourseById = async (id) => {
  return await Course.findById(id).populate('instructor');
};
