import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RecentWork from './pages/RecentWork';
import GetInTouch from './pages/GetInTouch';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(storedDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const handleToggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <Router>
      <Layout darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode}>
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/recent-work" element={<RecentWork darkMode={darkMode} />} />
          <Route path="/get-in-touch" element={<GetInTouch darkMode={darkMode} />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;