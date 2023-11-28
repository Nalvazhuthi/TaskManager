// App.js
import React, { useState, useEffect, useRef } from 'react';
import Tasks from './Tasks';
import './App.css';

const TaskManagerApp = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [newTask, setNewTask] = useState('');
  const [search, setSearch] = useState('');
  const inputRef=useRef()


  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: tasks.length, description: newTask, completed: false }]);
      setNewTask('');
      localStorage.setItem('tasks', JSON.stringify(tasks))
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    localStorage.setItem('tasks', JSON.stringify(tasks))
  };

  return (
    <div className="app">
      <h1>Task Manager App</h1>
      {/* Add items */}
      <form className="task-form" onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          ref={inputRef}
          required
        />
        <button onClick={()=>inputRef.current.focus()}>Add Task</button>
      </form>
      {/* Search items */}
      <input className='search' type="text" placeholder='Search...' onChange={(e) => setSearch(e.target.value)} />
      {/* Display items */}
      <ul className="task-list">
        <Tasks
          tasks={(tasks.filter(task => ((task.description).toLowerCase()).includes(search.toLowerCase()))).reverse()}
          handleDeleteTask={handleDeleteTask}
        />
      </ul>
    </div>
  );
};

export default TaskManagerApp;
