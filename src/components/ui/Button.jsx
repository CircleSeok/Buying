import React from 'react';

export default function Button({ text, onclick }) {
  return (
    <button
      className='bg-brand text-white py-2 px-4 rounded-sm hover:brightness-110'
      onclick={onclick}
    >
      {text}
    </button>
  );
}
