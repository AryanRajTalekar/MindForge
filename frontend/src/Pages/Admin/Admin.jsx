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
  import AdminStats from "./AdminStats";
  import Course_Creation from "../../Components/Course_Creation/Course_Creation";
  import CourseTrendGraph from "../../Components/Graph/CoursetrendGraph";
  import "./Admin.css";

  const Admin = () => {




  


    const my_courses = [
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
      }
    ];


    const [activeSection, setActiveSection] = useState("dashboard");

    const admin_name = "Aryan";
    console.log("Active Section:", activeSection);

    return (
      <div className="admin-container flex bg-gray-100">
        {/* Sidebar */}
        <div className="sidebar flex flex-col items-center justify-evenly w-[20%] h-80 rounded-lg  min-h-screen bg-gray-200">
        <div className="admin-dashboard-head w-full h-[4vw]  flex items-center justify-center text-3xl gap-2 underline decoration-yellow-500"><MdAdminPanelSettings color="orange" /><h1 className="text-3xl font-semibold">Admin Dashboard</h1></div>
          
          
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
        <div className="main-content flex-1 p-6 ">
            <div className="">
            {activeSection === "dashboard" && (
              <div className="admin-dashboard-content  w-full h-screen">
                <p className="admin-dashboard-para text-lg font-semibold">Welcome to the MindForge Admin Dashboard,<span className="font-bold">{admin_name}</span>!!!</p>
              <div className="courses_created_by_admin  w-full h-[25vw]">
                
                <h3 className='coursehead3 text-center font-bold '><span className='text-blue-600'>Your Most Popular Courses:-</span></h3>
                            
                      
                        <div className="courses1 w-full h-[10vw]  flex items-center justify-evenly">
                        {my_courses.map((course, index) => (
                        <button onClick={()=>{
                          console.log("Course Clicked:", course.title);
                        }} key={index} className="group course-panel border-3 rounded-lg border-yellow-300 h-[18vw] w-[15vw] flex flex-col 
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
                        </button>
                      ))}
                        </div>
                        {/* Button to all courses page */}
                        <div className="All_courses_btn w-full h-[3vw]  flex justify-end">
                          <button className='text-sm font-semibold bg-blue-400  rounded flex items-center justify-end w-[15vw]  text-black-500 transition-all ease-in-out transform hover:scale-120 hover:bg-green-300'>View All Courses you have Created<SlArrowRight/></button>
                        </div>
                        <div className="line border border-orange-500"></div>
                    
              </div>
              <div className=" flex">
              <AdminStats/>
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
              
              <div className="graph-container  w-full h-[30vw]">
              <AdminStats/>
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

  export default Admin;
