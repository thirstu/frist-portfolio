import React from 'react'
import { useEffect, useState } from 'react';
const Dark_Mode = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {

      if (darkMode) {
        // console.log(darkMode);
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
        // console.log(darkMode);
      }
    }, [darkMode]);
  
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    );
}

export default Dark_Mode
