import React from 'react';

export const Header = (props) => {
  return (
    <header className='py-4'>
      <nav className='text-center bg bg-green-200 py-2 w-11/12 mx-auto rounded-md shadow-sm shadow-gray-200'>
        <h1 className='text-4xl font-semibold text-gray-700'>To Do List</h1>
      </nav>
    </header>
  )
}