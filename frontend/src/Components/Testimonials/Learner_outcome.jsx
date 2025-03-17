import React from 'react'
import outcomes from '../../assets/outcomes.png'
import { SlArrowRight } from "react-icons/sl";

const Learner_outcome = () => {
  return (
    <div className="learner-outcome  w-full h-[40vw] flex bg-blue-200">
  <div className="image-container  w-1/2 h-[40vw]">
    <img src={outcomes} alt="" />
  </div>
  <div className="leaner-text w-1/2  flex flex-col items-center justify-center ">
  <h1 className='learner-heading text-4xl font-bold '>Learner outcomes on MindForge</h1>
  <h3 className='text-xl font-semibold'>77% of learners report career benefits, <br /> such as new skills, increased pay, and <br /> new job opportunities.</h3>
  <div className="getstartedbutton rounded-lg bg-orange-400 font-semibold text-2xl w-[17vw] h-[3.5vw]   ">
    <button  className='rounded-lg  w-full h-full items-center justify-end gap-10 flex items-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-blue-500'>Get Started<SlArrowRight /></button>
  </div>
  </div>
    
</div>
  )
}

export default Learner_outcome