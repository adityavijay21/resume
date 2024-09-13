import React from 'react';

const DarkModeToggle = ({ darkMode, handleToggleDarkMode }) => {
  const styles = {
    toggleButton: {
      backgroundColor: darkMode ? '#333' : '#f0f0f0',
      border: 'none',
      borderRadius: '50%',
      padding: '10px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    toggleIcon: {
      width: '24px',
      height: '24px',
      color: darkMode ? 'yellow' : '#333',
    },
  };

  return (
    <button style={styles.toggleButton} onClick={handleToggleDarkMode}>
      {darkMode ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={styles.toggleIcon} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8-9h1M4 12H3m15.364-6.364l-.707-.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={styles.toggleIcon} strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;