import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const Layout = ({ children, darkMode, handleToggleDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: darkMode ? '#1a1a1a' : 'white',
      color: darkMode ? 'white' : 'black',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      overflow: 'hidden',
      position: 'relative',
    },
    nav: {
      padding: '20px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    hamburger: {
      cursor: 'pointer',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      width: '30px',
      height: '25px',
    },
    menuIcon: {
      width: '30px',
      height: '3px',
      backgroundColor: darkMode ? 'white' : 'black',
      transition: '0.4s',
    },
    menu: {
      position: 'fixed',
      top: 0,
      left: menuOpen ? '0' : '-100%',
      width: '100%',
      height: '100%',
      backgroundColor: darkMode ? '#2a2a2a' : '#f0f0f0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'left 0.3s ease',
      zIndex: 999,
    },
    menuItem: {
      color: darkMode ? 'white' : 'black',
      textDecoration: 'none',
      fontSize: '24px',
      margin: '20px 0',
    },
    content: {
      height: isHomePage ? '100vh' : 'calc(100vh - 65px)', // Full height for home, adjusted for other pages
      overflowY: 'auto',
    },
    darkModeToggleContainer: {
      position: 'fixed',
      bottom: '20px',
      left: '20px',
      zIndex: 1000,
    },
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div style={styles.container}>
      {!isHomePage && (
        <nav style={styles.nav}>
          <div style={styles.hamburger} onClick={toggleMenu}>
            <div style={styles.menuIcon}></div>
            <div style={styles.menuIcon}></div>
            <div style={styles.menuIcon}></div>
          </div>
        </nav>
      )}
      <div style={styles.menu}>
        <Link to="/" style={styles.menuItem} onClick={toggleMenu}>Home</Link>
        <Link to="/recent-work" style={styles.menuItem} onClick={toggleMenu}>Recent Work</Link>
        <Link to="/get-in-touch" style={styles.menuItem} onClick={toggleMenu}>Get in Touch</Link>
      </div>
      <main style={styles.content}>{children}</main>
      <div style={styles.darkModeToggleContainer}>
        <DarkModeToggle darkMode={darkMode} handleToggleDarkMode={handleToggleDarkMode} />
      </div>
    </div>
  );
};

export default Layout;