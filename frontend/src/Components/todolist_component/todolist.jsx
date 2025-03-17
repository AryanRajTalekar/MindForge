import React, { useState } from "react";
import "./todolist.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "" && tasks.length < 5) {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput("");
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className=" main-container border-2 border-yellow-300 w-[18vw] h-[15vw] bg-gray-200 flex flex-col rounded-lg">
      <h2 className="todo-head text-lg font-semibold text-gray-800 text-center ">Admin To-Do List</h2>

      {/* Task Input Field */}
      <div className=" main-todo flex gap-2">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="w-full p-1 border border-gray-500 rounded focus:ring-1 focus:ring-blue-400 outline-none text-sm text-center"
          placeholder="Enter a task..."
          disabled={tasks.length >= 5}
        />
        <button
          onClick={addTask}
          className={`w-[2vw] text-sm rounded text-white ${
            tasks.length >= 5 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          }`}
          disabled={tasks.length >= 5}
        >
          Add
        </button>
      </div>

      {/* Task List (Scrollable) */}
      <ul className="flex-1 overflow-y-auto space-y-1">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between p-1 bg-gray-100 rounded text-sm">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
              className="mr-2 cursor-pointer"
            />
            <span className={`truncate w-full ${task.completed ? "line-through text-gray-500" : ""}`}>
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-500 hover:text-red-700 transition text-xs ml-2"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      {/* Message when max tasks reached */}
      {tasks.length >= 5 && (
        <p className="text-red-500 text-xs text-center mt-2">You can only add up to 5 tasks.</p>
      )}
    </div>
  );
};

export default TodoList;
