import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calender.css"; // Custom styles for dots

const workDays = [
  "2025-02-20",
  "2025-02-22",
  "2025-02-24", 
];

const AdminCalendar = () => {
  const [date, setDate] = useState(new Date());

  const tileContent = ({ date, view }) => {
    if (view === "month") {
      const formattedDate = date.toLocaleDateString("en-CA"); // Ensures format is YYYY-MM-DD
      
      if (workDays.includes(formattedDate)) {
        return <span className="dot green-dot"></span>;
      } else {
        return <span className="dot red-dot"></span>;
      }
    }
  };
  
  
  return (
    <div className="calendar-container ">
      <h2 className="text-lg font-lg mb-3 ">Admin Work Calendar</h2>
      <Calendar onChange={setDate} value={date} tileContent={tileContent}/>

    </div>
  );
};

export default AdminCalendar;
