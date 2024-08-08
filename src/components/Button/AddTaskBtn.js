import React from 'react';

export const AddTaskBtn = ({ onClick }) => {
  return (
    <div className='absolute w-full text-center py-4'>
      <button
        className='left-1/2 transform -translate-x-1/2 bg-gray-200 px-4 py-1 rounded shadow '
        onClick={onClick}>
        Add Task
      </button>
    </div>
  );
};
