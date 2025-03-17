import React, { useEffect, useRef } from 'react';
import './home.css';
import gsap from 'gsap';
import { TiStarburst } from "react-icons/ti";
import herovideo from '../../assets/herovideo.mp4'
import { SlArrowRight } from "react-icons/sl";
import Courses from '../courses/courses';
import Learner_outcome from '../../Components/Testimonials/Learner_outcome';
import Testimonials from '../../Components/Testimonials/testimonials';

const Home = () => {
  const heading1Ref = useRef(null);
  const heading2Ref = useRef(null);
  const herovideoRef = useRef(null);

  

  useEffect(() => {
    gsap.set(heading1Ref.current, { opacity: 0, x: -100 });
    gsap.set(heading2Ref.current, { opacity: 0, x: 100 }); 
    gsap.set(herovideoRef.current, { opacity: 0, x: 100, borderColor: "transparent" });

    gsap.to(heading1Ref.current, {
      x: 0, // Move to original position
      opacity: 1,
      duration: 3.5,
      ease: "power4.out",
    });

    gsap.to(heading2Ref.current, {
      x: 0, // Move to original position
      opacity: 1,
      duration: 2.5,
      ease: "power2.out",
      delay: 0.3, // Small delay so it feels staggered
    });
    gsap.to(herovideoRef.current, {
      x: 0,
      opacity: 1,
      borderColor: "#facc15", // Equivalent to Tailwind's yellow-400
      duration: 3,
      ease: "power3.out",
      delay: 0.8,
    });
  }, []);

  return (
    <>
    <div className="line w-full border-1 border-gray-200"></div>
    <div className="main-container flex">
      
      <div className="hero-section w-1/2 h-[30vw] relative flex flex-col items-center justify-center ">
      <h1 ref={heading1Ref} className="head1 text-6xl font-[Grechen_Fuemen] w-[60vw] text-center ">
        Empowering <span className='text-yellow-500'>Minds</span> ,
      </h1>
      <h1 ref={heading2Ref} className="head2 text-6xl font-[Grechen_Fuemen] w-[65vw] text-center">
        One Course at a Time.
      </h1>
      <p className='para1 font-semibold  flex'><TiStarburst color="gold"/>
       Unlock your potential with MindForge—your go-to learning hub. <br />
       Start, switch, or advance your career with more than 10,000 courses, <br />
       Professional Certificates, and degrees from world-class universities and companies.</p>
       <div className="getstartedbutton rounded-lg bg-orange-400 font-semibold text-2xl w-[17vw] h-[3.5vw]   ">
        <button  className='rounded-lg  w-full h-full items-center justify-end gap-20 flex items-center transition-all duration-200 ease-in-out transform hover:scale-101 hover:bg-blue-500'>Get Started<SlArrowRight /></button>
       </div>
    </div>

    <div ref={herovideoRef} className="hero-video w-1/2 rounded-2xl border-2 border-yellow-400">
  
    <video autoPlay loop muted playsInline loading="lazy" src={herovideo} type="video/mp4" className='rounded-2xl'></video>
  
    </div>

    

    </div>


    <div className="page2 w-full h-[20vw] bg-gray-200 border">
  <div className="collaboration-section flex flex-col items-center">
    <h1 className=" collab-head font-semibold text-4xl">
      We have Collaborated with <span className="underline text-blue-700">50+ leading universities and companies</span>
    </h1>
   
  </div>
</div>



<Courses/>

<Learner_outcome/>

<Testimonials/>

    
  </>

    
  );
}

export default Home;
