import React from 'react'
import { FaStar } from "react-icons/fa";
import './courses.css'
import { SlArrowRight } from "react-icons/sl";

const courses = () => {

  const courses_popular = [
    {
      title: "Introduction to Web Development",
      description: "Learn to build websites and web applications using the latest technologies.",
      difficulty: "Beginner Friendly",
      duration: "3 Hours",
      type: "Free Course",
    },
    {
      title: "Advanced JavaScript",
      description: "Deep dive into JavaScript concepts and best practices.",
      difficulty: "Intermediate",
      duration: "5 Hours",
      type: "Premium Course",  
    },
    {
      title: "React Basics",
      description: "Get started with React.js and build interactive UIs.",
      difficulty: "Beginner",
      duration: "4 Hours",
      type: "Free Course", 
    },
    {
      title: "CSS Mastery",
      description: "Master modern CSS techniques and responsive design.",
      difficulty: "Intermediate",
      duration: "6 Hours",
      type: "Free Course", 
    }
  ];

  const newlyAddedPrograms = [
    {
      title: "Python for Beginners",
      description: "Learn the fundamentals of Python programming with hands-on exercises.",
      difficulty: "Beginner Friendly",
      duration: "4 Hours",
      type: "Free Course",
    },
    {
      title: "Machine Learning Essentials",
      description: "Understand the basics of machine learning and build predictive models.",
      difficulty: "Intermediate",
      duration: "6 Hours",
      type: "Premium Course",
    },
    {
      title: "Node.js & Express Basics",
      description: "Get started with backend development using Node.js and Express.",
      difficulty: "Beginner",
      duration: "5 Hours",
      type: "Free Course",
    },
    {
      title: "UI/UX Design Principles",
      description: "Master the fundamentals of designing intuitive and engaging user interfaces.",
      difficulty: "Intermediate",
      duration: "7 Hours",
      type: "Free Course",
    }
];



  return (

    <div className="main-container">


                                                {/* Most Popular Section */}
      <div className="Courses-section-popular w-full h-[70vh] ">
        <div className="courses-section-head flex flex-col items-center">
        <h1 className='coursehead flex'><FaStar color='red' /><span className='font-[Grechen_Fuemen] font-semibold text-4xl text-yellow-500'>Courses</span></h1>
       
       <h3 className='coursehead3 font-bold'>Discover our <span className='text-blue-600'> Most popular courses</span>, chosen by learners worldwide for mastering in-demand skills..</h3>

        </div>
        
            
      
        <div className="courses1 w-full h-[15vw]  flex items-center justify-evenly">
        {courses_popular.map((course, index) => (
        <div key={index} className="group course-panel border-3 rounded-lg border-yellow-300 h-[18vw] w-[15vw] flex flex-col 
        transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500">
        
        <h3 className="text-sm font-semibold bg-orange-300 rounded-t-sm flex justify-center py-2 
          border border-transparent transition-all duration-300 ease-in-out 
          group-hover:bg-blue-500">
          {course.type} 
        </h3>
      


          {/* Content */}
          <div className="course-panel-content flex flex-col flex-grow px-3 py-2">
            <h1 className="course-panel-heading text-lg font-bold text-center h-[3vw] flex items-center justify-center">
              {course.title}
            </h1>
            <p className="course-panel-para text-sm text-center flex-grow h-[5vw] overflow-hidden">
              {course.description}
            </p>
            <div className="line border-1 border-dashed my-2"></div>

            {/* Bottom Section */}
            <div className="flex justify-evenly items-center">
              <h3 className="course-panel-difficulty text-sm font-semibold rounded-b-sm flex justify-center">
                {course.difficulty}
              </h3>
              <div className="course-duration-panel text-sm font-semibold">{course.duration}</div>
            </div>
          </div>
        </div>
      ))}
      
        </div>
        {/* Button to all courses page */}
        <div className="All_courses_btn w-full h-[3vw]  flex justify-end">
          <button className='text-sm font-semibold bg-blue-600  rounded flex items-center justify-end w-[8vw]  text-black-500 transition-all ease-in-out transform hover:scale-120 hover:bg-green-300'>View All Courses<SlArrowRight/></button>
        </div>
    </div>


                                                  {/* NewlyAdded Section */}




    <div className="Courses-section-newlyadded w-full h-[70vh] ">
        <div className="courses-section-head flex flex-col items-center">
      
       <h3 className='coursehead3 font-bold '>Explore our <span className='text-blue-600'>newest programs</span>, focused on delivering in-demand skills</h3>

        </div>
        
            
      
        <div className="courses1 w-full h-[15vw]  flex items-center justify-evenly">
        {newlyAddedPrograms.map((course, index) => (
        <div key={index} className="group course-panel border-3 rounded-lg border-yellow-300 h-[18vw] w-[15vw] flex flex-col 
        transition-all duration-300 ease-in-out transform hover:scale-105 hover:border-blue-500">
        
        <h3 className="text-sm font-semibold bg-orange-300 rounded-t-sm flex justify-center py-2 
          border border-transparent transition-all duration-300 ease-in-out 
          group-hover:bg-blue-500">
          {course.type} 
        </h3>
      


          {/* Content */}
          <div className="course-panel-content flex flex-col flex-grow px-3 py-2">
            <h1 className="course-panel-heading text-lg font-bold text-center h-[3vw] flex items-center justify-center">
              {course.title}
            </h1>
            <p className="course-panel-para text-sm text-center flex-grow h-[5vw] overflow-hidden">
              {course.description}
            </p>
            <div className="line border-1 border-dashed my-2"></div>

            {/* Bottom Section */}
            <div className="flex justify-evenly items-center">
              <h3 className="course-panel-difficulty text-sm font-semibold rounded-b-sm flex justify-center">
                {course.difficulty}
              </h3>
              <div className="course-duration-panel text-sm font-semibold">{course.duration}</div>
            </div>
          </div>
        </div>
      ))}
        </div>
        {/* Button to all courses page */}
    <div className="All_courses_btn w-full h-[3vw]  flex justify-end">
          <button className='text-sm font-semibold bg-blue-600  rounded flex items-center justify-end w-[8vw]  text-black-500 transition-all ease-in-out transform hover:scale-120 hover:bg-green-300'>View All Courses<SlArrowRight/></button>
        </div>
    </div>
    
    </div>
    

  )
}

export default courses