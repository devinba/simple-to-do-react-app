import React, { useState } from 'react';
import { TaskItem, AddTaskBtn } from '../index';

export const Main = () => {
  // State to manage the list of tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = () => setTasks([...tasks, {}]);

  return (
    <main className='h-full w-full px-12 py-3'>
      <div className='bg-violet-200 h-3/4 rounded-md pt-4 relative flex flex-col gap-y-4 py-4 scroll-smooth overflow-y-auto'>
        {tasks.map((task, index) => (
          <TaskItem key={index} />
        ))}
      </div>
      <AddTaskBtn onClick={addTask} />
    </main>
  );
};