import { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const courseData = {
  React: [
    { month: "Jan", completed: 80 },
    { month: "Feb", completed: 150 },
    { month: "Mar", completed: 250 },
    { month: "Apr", completed: 320 },
    { month: "May", completed: 400 },
  ],
  Python: [
    { month: "Jan", completed: 100 },
    { month: "Feb", completed: 180 },
    { month: "Mar", completed: 300 },
    { month: "Apr", completed: 400 },
    { month: "May", completed: 500 },
  ],
  "Web Dev": [
    { month: "Jan", completed: 50 },
    { month: "Feb", completed: 130 },
    { month: "Mar", completed: 280 },
    { month: "Apr", completed: 350 },
    { month: "May", completed: 420 },
  ],
};

const CourseTrendGraph = () => {
  const [selectedCourse, setSelectedCourse] = useState("Python");

  return (
    <div className="w-[60vw] h-70 bg-gray-900 p-4 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-white text-lg font-bold">📈 Course Enrollment Trend</h3>
        <select
          className="bg-gray-800 text-white p-2 rounded"
          value={selectedCourse}
          onChange={(e) => setSelectedCourse(e.target.value)}
        >
          {Object.keys(courseData).map((course) => (
            <option key={course} value={course}>
              {course}
            </option>
          ))}
        </select>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <LineChart data={courseData[selectedCourse]}>
          <XAxis dataKey="month" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Line type="monotone" dataKey="completed" stroke="#4CAF50" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourseTrendGraph;
