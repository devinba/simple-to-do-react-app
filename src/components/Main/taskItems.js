import React from 'react';

export const TaskItem = (props) => {
  return (
    <div>
      <div className='flex gap-x-4 items-center px-4'>
        <input type="checkbox" className='h-6 w-6'/> 
        <input type="text" className='bg-violet-200 border focus:outline-none w-11/12 p-2 text-gray-600 text-xl'/>
      </div>
    </div>
  )
}