import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-300">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;
