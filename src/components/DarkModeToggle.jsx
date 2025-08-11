// components/DarkModeToggle.js
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.className = darkMode ? 'bg-dark text-white' : '';
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="position-fixed top-0 end-0 m-3" style={{ zIndex: 999 }}>
      <Button variant={darkMode ? 'light' : 'dark'} onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </Button>
    </div>
  );
};

export default DarkModeToggle;
