import React from 'react';

export default function DeleteBtn({ text, onClick }) {
  return (
    <button
      className='bg-red-600 text-white py-2 px-4 rounded-sm hover:brightness-110 mt-2'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
