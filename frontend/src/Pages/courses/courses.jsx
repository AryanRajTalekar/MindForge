import React from 'react'
import { FaStar } from "react-icons/fa";
import { SlArrowRight } from "react-icons/sl";
import NewCourses from '../../Components/CourseTypes/NewCourses';
import MostPopularCourses from '../../Components/CourseTypes/MostPopularCourses';

const courses = () => {


  return (

    <div className="main-container">
          <div className="">

            {/* Most Popular Section */}

            <div className="courses-section-head flex flex-col items-center mb-[1vw]">
      
      <h3 className='coursehead3 font-bold mb-[2vw]'>Explore Your <span className='text-blue-600'>MOST POPULAR COURSES</span></h3>
             
       </div>
   <MostPopularCourses/>
          </div>



          <div className="">

            {/* NewlyAdded Section */}

            <div className="courses-section-head flex flex-col items-center mb-[1vw]">
      
      <h3 className='coursehead3 font-bold mb-[2vw]'>Explore our <span className='text-blue-600'>NEWEST COURSES</span>, focused on delivering in-demand skills</h3>

       </div>


        <NewCourses/>
        
          </div>

                                                


                                                  

    
    
    </div>
    

  )
}

export default courses