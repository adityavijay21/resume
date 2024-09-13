import React from 'react';

const GetInTouch = ({ darkMode }) => {
  const styles = {
    container: {
      padding: '20px',
      color: darkMode ? 'white' : 'black',
    },
    title: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: '400px',
    },
    input: {
      marginBottom: '10px',
      padding: '5px',
      fontSize: '16px',
    },
    button: {
      padding: '10px',
      fontSize: '16px',
      backgroundColor: darkMode ? '#333' : '#f0f0f0',
      color: darkMode ? 'white' : 'black',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Get in Touch</h1>
      <form style={styles.form}>
        <input style={styles.input} type="text" placeholder="Name" />
        <input style={styles.input} type="email" placeholder="Email" />
        <textarea style={styles.input} placeholder="Message" rows="4"></textarea>
        <button style={styles.button} type="submit">Send</button>
      </form>
    </div>
  );
};

export default GetInTouch;
