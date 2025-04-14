  import React, { useState } from "react";
  import { TiHome } from "react-icons/ti";
  import { BiBook } from "react-icons/bi";
  import { MdQuiz, MdAnalytics } from "react-icons/md";
  import { FaUsers } from "react-icons/fa";
  import { GiDiscussion } from "react-icons/gi";
  import { CgProfile } from "react-icons/cg";
  import { FiLogOut } from "react-icons/fi";
  import { MdAdminPanelSettings } from "react-icons/md";
  import Profile from "../../Components/Profile/Profile";
  import Calender from "../../Components/Calender/calender";
  import TodoList from "../../Components/todolist_component/todolist";
  import { SlArrowRight } from "react-icons/sl";
  import { FaStar } from "react-icons/fa";
  
  import Course_Creation from "../../Components/Course_Creation/Course_Creation";
  import CourseTrendGraph from "../../Components/Graph/CoursetrendGraph";
  import MostPopularCourses from "../../Components/CourseTypes/MostPopularCourses";
  import NewCourses from "../../Components/CourseTypes/NewCourses";
  

  const Instructor = () => {




  


    


    const [activeSection, setActiveSection] = useState("dashboard");

    const Instructor_name = "Aryan";
    console.log("Active Section:", activeSection);

    return (
      <div className="instructor-container flex bg-gray-100 min-h-screen">
        {/* Sidebar */}
        <div className="sidebar fixed flex flex-col items-center justify-evenly w-[20%] h-80 rounded-lg  min-h-screen bg-gray-200">
        <div className="Instructor-dashboard-head w-full h-[4vw] flex items-center justify-center text-3xl gap-2 underline decoration-yellow-500"><MdAdminPanelSettings color="orange" /><h1 className="text-2xl font-semibold">Instructor Dashboard</h1></div>
          
          
          <button onClick={() => setActiveSection("dashboard")}
              className={`border w-[17vw] h-[2vw] flex justify-center items-center rounded-md font-medium shadow-md transition duration-300 ease-in-out transform hover:bg-yellow-300 hover:scale-105 ${
              activeSection === "dashboard" ? "bg-yellow-400 text-black" : "bg-gray-200 text-black"
              }`}>
            <TiHome size={22} className="text-blue-600" />
            Dashboard
          </button>

          <button onClick={() => setActiveSection("courses")}
              className={`border w-[17vw] h-[2vw] flex justify-center items-center rounded-md font-medium shadow-md transition duration-300 ease-in-out transform hover:bg-yellow-300 hover:scale-105 ${
              activeSection === "courses" ? "bg-yellow-400 text-black" : "bg-gray-200 text-black"
              }`}>
                  <BiBook size={22} className="text-blue-600" />
            Create Courses
          </button>

          <button onClick={() => setActiveSection("quizzes")}
              className={`border w-[17vw] h-[2vw] flex justify-center items-center rounded-md font-medium shadow-md transition duration-300 ease-in-out transform hover:bg-yellow-300 hover:scale-105 ${
              activeSection === "quizzes" ? "bg-yellow-400 text-black" : "bg-gray-200 text-black"
              }`}>
                  <MdQuiz size={22} className="text-blue-600" />
          Quizzes & Assignments
          </button>

          <button onClick={() => setActiveSection("analytics")}
              className={`border w-[17vw] h-[2vw] flex justify-center items-center rounded-md font-medium shadow-md transition duration-300 ease-in-out transform hover:bg-yellow-300 hover:scale-105 ${
              activeSection === "analytics" ? "bg-yellow-400 text-black" : "bg-gray-200 text-black"
              }`}>
          <MdAnalytics size={22} className="text-orange-500" />
          Analytics & Reports
          </button>

          <button onClick={() => setActiveSection("Course-management")}
              className={`border w-[17vw] h-[2vw] flex justify-center items-center rounded-md font-medium shadow-md transition duration-300 ease-in-out transform hover:bg-yellow-300 hover:scale-105 ${
              activeSection === "Course-management" ? "bg-yellow-400 text-black" : "bg-gray-200 text-black"
              }`}>
          <FaUsers size={22} className="text-purple-600" />
            Course Management
          </button>

          <button onClick={() => setActiveSection("discussion")}
              className={`border w-[17vw] h-[2vw] flex justify-center items-center rounded-md font-medium shadow-md transition duration-300 ease-in-out transform hover:bg-yellow-300 hover:scale-105 ${
              activeSection === "discussion" ? "bg-yellow-400 text-black" : "bg-gray-200 text-black"
              }`}>
              <GiDiscussion size={22} className="text-teal-600" />
          Discussion & Moderation
          </button>

          <button onClick={() => setActiveSection("profile")}
              className={`border w-[17vw] h-[2vw] flex justify-center items-center rounded-md font-medium shadow-md transition duration-300 ease-in-out transform hover:bg-yellow-300 hover:scale-105 ${
              activeSection === "profile" ? "bg-yellow-400 text-black" : "bg-gray-200 text-black"
              }`}>        <CgProfile size={22} className="text-indigo-600" />
            Profile Settings
          </button>

          <button className="Logout-btn border w-[17vw] h-[2vw] flex justify-center items-center rounded-md font-medium shadow-md transition duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105">
          <FiLogOut size={22} />
            Log Out
          </button>


        </div>






        {/* Main Content */}
        <div className="main-content flex-1 p-6 ml-[20vw] min-h-screen">
            <div className="">
            {activeSection === "dashboard" && (
              <div className="admin-dashboard-content  w-full h-screen  border-yellow-600">
                <p className="admin-dashboard-para text-2xl font-semibold ml-[2vw] mb-[2vw]">Welcome to Instructor Dashboard <span className="font-bold"> {Instructor_name}👋</span>!!!</p>
              <div className="courses_created_by_instructor  w-full h-screen">
                
                
                
                <div className="">
                <div className="courses-section-head flex flex-col items-center mb-[1vw]">
      
       <h3 className='coursehead3 font-bold mb-[2vw]'>Explore Your <span className='text-blue-600'>MOST POPULAR COURSES</span></h3>

        </div>
                  <MostPopularCourses/>
                </div>

                        {/* line seperation div */}
                        <div className="line border border-orange-500 mb-[2vw] mt-[2vw]"></div>


                <div className="">
                <div className="courses-section-head flex flex-col items-center mb-[1vw]">
      
      <h3 className='coursehead3 font-bold mb-[2vw]'>Explore our <span className='text-blue-600'>NEWEST COURSES</span>, focused on delivering in-demand skills</h3>

       </div>
       <NewCourses/>
                </div>
                        
                    
              </div>
              
             
              </div>
                 )}
            </div>
                 
            
          










          {activeSection === "courses" && (
            <div className="bg-gray-100">
            <Course_Creation />
          </div>
          )}

          {activeSection === "quizzes" && (
            <div>
              <h1 className="text-2xl font-semibold">Quizzes & Assignments</h1>
              <p>Manage and create quizzes.</p>
            </div>
          )}

          {activeSection === "analytics" && (
            <div>
              <div className="analytics-head">
              <h1 className="text-2xl font-semibold text-center underline">Analytics & Reports</h1>
              <p className="text-xl font-semibold">Track performance and engagement.</p>
              </div>
              
              <div className="graph-container w-full h-[30vw]">
              
              <CourseTrendGraph/>
              
              </div>
            </div>
          )}

          {activeSection === "Course-management" && (
            <div>
              <h1 className="text-2xl font-semibold">Course Management</h1>
              <p>Monitor and manage Courses</p>
            </div>
          )}

          {activeSection === "discussion" && (
            <div>
              <h1 className="text-2xl font-semibold">Discussion & Moderation</h1>
              <p>Engage in and moderate discussions.</p>
            </div>
          )}

          {activeSection === "profile" && (
            <div>
              <h1 className="text-2xl font-semibold">Profile Settings</h1>
              <p>Update your profile details here.</p>
            </div>
          )}
        </div>

        {/* <div className="flex flex-col items-center w-[20%] rounded-lg h-screen bg-gray-200">
              <Profile />
              <Calender/>
              <TodoList />  
        </div> */}  
          {/* no need of profile seaction code on this page */}
      </div>
    );
  };

  export default Instructor;
