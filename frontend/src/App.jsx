import { Routes, Route ,useLocation} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/contactpage";
import Footer from "./Components/Footer/Footer";
import AdminDashboard from "./Pages/Admin/Admin";


const App = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
       {!isAdminRoute && <Navbar />}
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* <Route path="/my-courses" element={<MyCourses />} /> */}
        {/* <Route path="/profile-setting" element={<ProfileSetting />} /> */}
        {/* <Route path="/quizzes" element={<Quizzes />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {!isAdminRoute && <Footer />}
    </>
  );
};

export default App;
