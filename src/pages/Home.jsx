import React from 'react';
import { Link } from 'react-router-dom';

const Home = ({ darkMode }) => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      padding: '40px 20px',
      fontFamily: 'Arial, sans-serif',
      boxSizing: 'border-box',
      overflow: 'hidden',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    title: {
      fontSize: '28px',
      fontWeight: '500',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '16px',
      color: darkMode ? '#bbb' : '#555',
      marginBottom: '20px',
    },
    section: {
      marginBottom: '20px',
      color: darkMode ? '#ccc' : '#666',
    },
    link: {
      textDecoration: 'underline',
      color: darkMode ? '#3f9fff' : '#007acc',
    },
    socialIcons: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'center',
      marginTop: '20px',
    },
    icon: {
      width: '24px',
      height: '24px',
      color: darkMode ? '#bbb' : '#333',
      transition: 'color 0.3s ease',
    },
    navLink: {
      color: darkMode ? '#3f9fff' : '#007acc',
      textDecoration: 'none',
      margin: '0 10px',
      fontSize: '16px',
    },
  };

  const SocialIcon = ({ href, ariaLabel, children }) => (
    <a href={href} aria-label={ariaLabel} style={styles.icon}>
      {children}
    </a>
  );

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.title}>Aditya Vijay</h1>
        <p style={styles.subtitle}>Full-Stack Developer & UI/UX Designer</p>

        <section style={styles.section}>
          <p>Currently building sleek websites and apps using React.js, React Native, and Node.js.</p>
          <p>Proficient in Git, Docker, System Design and more technologies.</p>
        </section>

        <section style={styles.section}>
          <p>
            Take a look at my <Link to="/recent-work" style={styles.link}>recent work</Link> or feel free to{' '}
            <Link to="/get-in-touch" style={styles.link}>get in touch</Link>.
          </p>
        </section>

        <div style={styles.socialIcons}>
          <SocialIcon href="https://linkedin.com/in/adityavijay21" ariaLabel="Linkedin">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12l5 5L20 7" />
            </svg>
          </SocialIcon>
          <SocialIcon href="https://github.com/adityavijay21" ariaLabel="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.867 8.166 6.839 9.49.5.091.682-.217.682-.483 0-.237-.007-.866-.011-1.7-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.621.069-.608.069-.608 1.004.07 1.533 1.034 1.533 1.034.893 1.53 2.341 1.089 2.911.832.091-.647.35-1.09.636-1.341-2.22-.253-4.555-1.11-4.555-4.945 0-1.092.39-1.987 1.029-2.684-.103-.253-.446-1.274.097-2.656 0 0 .84-.269 2.75 1.025A9.563 9.563 0 0112 6.841c.853.004 1.711.115 2.514.337 1.909-1.294 2.748-1.025 2.748-1.025.546 1.382.203 2.403.1 2.656.641.697 1.029 1.592 1.029 2.684 0 3.845-2.339 4.688-4.566 4.937.359.309.678.919.678 1.854 0 1.338-.012 2.419-.012 2.747 0 .268.18.577.688.479A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z" />
            </svg>
          </SocialIcon>
          <SocialIcon href="mailto:adityavijay2103@gmail.com" ariaLabel="Email">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12h4v8H4v-8h4M4 8h16V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2m10 4v10M10 12v10m0-16l-6 6m12-6l-6 6" />
            </svg>
          </SocialIcon>
        </div>
      </div>
    </div>
  );
};

export default Home;