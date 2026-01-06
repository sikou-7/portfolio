import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark'
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors focus:outline-none"
      aria-label="Toggle Theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <FaSun className="text-yellow-400 text-xl" />
        ) : (
          <FaMoon className="text-gray-600 text-xl" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
