import React from 'react'
import { SlArrowRight } from "react-icons/sl";

const NewCourses = () => {

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
    <div>
        <div className="Courses-section-newlyadded w-full ">
        
        
            
      
        <div className="courses1 w-full h-[15vw]  flex items-center justify-evenly">
        {newlyAddedPrograms.map((course, index) => (
        <div key={index} className="group course-panel border-2 rounded-lg border-yellow-300 h-[18vw] w-[15vw] flex flex-col 
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
        {/* button to all courses page */}
        <div className="AllCoursesPageButton rounded-lg  font-semibold text-sm w-[17vw] h-[2vw]  w-full flex items-center">
                          <button  className='rounded-lg  w-full h-[1vw] items-center justify-end gap-2 flex items-center mr-[5vw] underline'>All Courses&gt;</button>
         </div>
    </div>
    </div>
  )
}

export default NewCourses