import React, { useState, useEffect } from 'react';
import { Router, Route } from 'wouter'; // Wouter imports
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
        <Route path="/">
          <Home darkMode={darkMode} />
        </Route>
        <Route path="/recent-work">
          <RecentWork darkMode={darkMode} />
        </Route>
        <Route path="/get-in-touch">
          <GetInTouch darkMode={darkMode} />
        </Route>
      </Layout>
    </Router>
  );
};

export default App;
