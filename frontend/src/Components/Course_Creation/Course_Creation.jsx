import React, { useState } from 'react';
import './Course_Creation.css';

const Course_Creation = () => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    category: "Technology",
    price: "free",
    certificate: false,
    syllabusPDF: null,
    publishDate: "",
    language: "English",
    difficulty: "Beginner",
    tags: [],
    instructor: "",
    modules: [{ title: "", lessons: [""] }],
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setCourse({
      ...course,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Course Data:", course);
    alert("Course Created Successfully!");
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-800">Create a New Course</h2>
      <p className="text-gray-500">Fill in the details to create a new course.</p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {/* Course Title */}
        <div>
          <label className="block text-gray-700 font-medium">Course Title</label>
          <input
            type="text"
            name="title"
            value={course.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            placeholder="Enter course title"
            required
          />
        </div>

        {/* Course Description */}
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            name="description"
            value={course.description}
            onChange={handleChange}
            className="w-full h-24 px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            placeholder="Write a brief course description"
            required
          />
        </div>

        {/* Category, Price & Difficulty */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 font-medium">Category</label>
            <select
              name="category"
              value={course.category}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option>Technology</option>
              <option>Business</option>
              <option>Design</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Price</label>
            <select
              name="price"
              value={course.price}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option value="free">Free</option>
              <option value="paid">Paid</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Difficulty</label>
            <select
              name="difficulty"
              value={course.difficulty}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Instructor */}
        <div>
          <label className="block text-gray-700 font-medium">Instructor</label>
          <input
            type="text"
            name="instructor"
            value={course.instructor}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
            placeholder="Enter instructor's name"
          />
        </div>

        {/* Upload Syllabus PDF */}
        <div>
          <label className="block text-gray-700 font-medium">Syllabus PDF</label>
          <input
            type="file"
            name="syllabusPDF"
            onChange={handleChange}
            accept="application/pdf"
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>

        {/* Publish Date */}
        <div>
          <label className="block text-gray-700 font-medium">Publish Date</label>
          <input
            type="date"
            name="publishDate"
            value={course.publishDate}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Course Modules */}
        <div>
          <label className="block text-gray-700 font-medium">Modules</label>
          {course.modules.map((module, index) => (
            <div key={index} className="mb-4 p-4 border rounded-md">
              <input
                type="text"
                name="moduleTitle"
                placeholder={`Module ${index + 1} Title`}
                value={module.title}
                onChange={(e) => {
                  const newModules = [...course.modules];
                  newModules[index].title = e.target.value;
                  setCourse({ ...course, modules: newModules });
                }}
                className="w-full px-4 py-2 border rounded-md mb-2 focus:ring focus:ring-blue-200 focus:outline-none"
              />
              {module.lessons.map((lesson, lessonIndex) => (
                <input
                  key={lessonIndex}
                  type="text"
                  placeholder={`Lesson ${lessonIndex + 1}`}
                  value={lesson}
                  onChange={(e) => {
                    const newModules = [...course.modules];
                    newModules[index].lessons[lessonIndex] = e.target.value;
                    setCourse({ ...course, modules: newModules });
                  }}
                  className="w-full px-4 py-2 border rounded-md mb-2 focus:ring focus:ring-blue-200 focus:outline-none"
                />
              ))}
            </div>
          ))}
          <button
            type="button"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            onClick={() =>
              setCourse({
                ...course,
                modules: [...course.modules, { title: "", lessons: [""] }],
              })
            }
          >
            + Add Module
          </button>
        </div>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-4 mt-6">
          <button type="button" className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md">Cancel</button>
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700">
            Create Course
          </button>
        </div>
      </form>
    </div>
  );
};

export default Course_Creation;
