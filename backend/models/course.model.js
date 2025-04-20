const mongoose = require('mongoose');
const {v4:UUID} = require('uuid');

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
});

const courseSchema = new mongoose.Schema({
    course_id:{
        type:String,
        default:UUID
    },
  title: {
    type: String,
    required: true,
    minlength: [3, "Title must be at least 3 characters long"],
    maxlength: [100, "Title must be at most 100 characters long"], 
  },
  description: {
    type: String,
    required: true,
    minlength: [10, "Description must be at least 10 characters long"],
    maxlength: [500, "Description must be at most 500 characters long"],
  },
  instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'Instructor' },
  videos: [{ type: String }]

}, { timestamps: true });



courseSchema.statics.createCourse = async function(courseData) {
    return this.create(courseData);
};

const courseModel= mongoose.model('Course', courseSchema);

module.exports = courseModel
