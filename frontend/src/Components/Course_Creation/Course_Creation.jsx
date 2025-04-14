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
    <div className="h-screen bg-white shadow-lg rounded-lg border-2 w-full">
      <div className="main-heading flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-gray-800">Create a New Course</h2>
      <p className="text-gray-500">Fill in the details to create a new course.</p>
      </div>
    </div>
  );
};

export default Course_Creation;
