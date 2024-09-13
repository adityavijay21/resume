
import React from 'react';
import { ExternalLink } from 'lucide-react';
import './RecentWork.css';


const ProjectItem = ({ title, description, technologies, features, link }) => (
  <div className="project-item">
    <h3 className="project-title">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          {title}
          <ExternalLink className="external-link-icon" />
        </a>
      ) : (
        title
      )}
    </h3>
    <p className="project-description">{description}</p>
    {technologies && (
      <p className="project-technologies">
        <span className="tech-label">Technologies:</span> {technologies}
      </p>
    )}
    {features && (
      <div className="project-features">
        <span className="features-label">Key Features:</span>
        <ul className="features-list">
          {features.map((feature, index) => (
            <li key={index} className="feature-item">
              {feature}
            </li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

// **SectionTitle Component**
const SectionTitle = ({ children }) => (
  <h2 className="section-title">{children}</h2>
);

// **RecentWork Component**
const RecentWork = ({ darkMode }) => {
  // Define projects data
  const projects = {
    coding: [
      {
        title: "React Snipp",
        description: "Open-source VSCode extension featuring 50+ React snippets and hooks",
        features: [
          "Custom snippets for React components, hooks, and common patterns",
          "Increased developer productivity by 30%",
          "Regular updates to align with latest React best practices",
        ],
        link: "https://github.com/adityavijay21/reactsnipp",
      },
      {
        title: "Online JavaScript Compiler",
        description: "Multi-file JavaScript compiler with real-time execution",
        technologies: "React.js, Node.js, Express, Monaco Editor, Docker",
        features: [
          "Syntax highlighting and autocompletion",
          "File explorer for complex projects",
          "Real-time code execution and console output display",
          "Reduced code compilation time by 40%",
          "Containerized for easy deployment",
        ],
        link: "https://github.com/adityavijay21/javascript-compiler",
      },
      {
        title: "Resxume App",
        description: "React Native mobile app for resume building and job hunting",
        technologies: "React Native, Node.js, Express, Expo",
        features: [
          "ATS-friendly resume templates",
          "In-app resume writer hiring",
          "Job opportunity finder",
          "Improved user engagement by 25%",
        ],
        link: "https://github.com/resxume/resxume-app",
      },
      {
        title: "Editor.html",
        description: "Desktop application for live HTML/CSS/JavaScript development",
        technologies: "Electron.js, React.js",
        features: [
          "Real-time preview of web components",
          "Cross-platform compatibility (Windows, macOS, Linux)",
          "Accelerated prototyping speed by 35%",
          "Web version available for browser-based usage",
        ],
        link: "https://github.com/adityavijay21/editor.html",
      },
      {
        title: "Electron Hotreload",
        description: "NPM package for automatic Electron app reloading during development",
        technologies: "JavaScript, Node.js, Electron",
        features: [
          "File system watching for changes",
          "Selective reloading of changed components",
          "Optimized development workflow by 20%",
        ],
        link: "https://github.com/adityavijay21/electron-hotreload",
      },
      {
        title: "Embeddable HTTP Server",
        description: "Cross-platform, feature-rich HTTP server for easy integration",
        technologies: "Node.js, Express, MongoDB, JWT, HTTPS/SSL",
        features: [
          "Minimal resource usage with compression",
          "JWT-based authentication",
          "MongoDB integration",
          "API documentation with Swagger",
          "Enhanced API response times by 45%",
          "Comprehensive logging and error handling",
        ],
        link: "https://github.com/adityavijay21/Embedded-HTTP-Server",
      },
      {
        title: "Shell Clock",
        description: "Bash script for colorful digital clock display in terminal",
        technologies: "Bash scripting",
        features: [
          "Customizable color output",
          "Low resource consumption",
          "Ideal for server time monitoring",
        ],
        link: "https://github.com/adityavijay21/colorful-digital-clock-script",
      },
    ],
    uiux: [
      {
        title: "Morden Minimal Banking App UI",
        description: "Modern and minimalist banking app user interface design",
        features: [
          "Intuitive onboarding",
          "Secure authentication",
          "Real-time dashboard",
          "Streamlined transfers",
          "Improved user engagement by 35% through minimalist design and clear information hierarchy",
        ],
        link: "https://www.figma.com/community/file/1353922239204602407/morden-minimal-banking-app-ui",
      },
      {
        title: "Speaker Audio Control App UI",
        description: "User interface design for a speaker audio control application",
        features: [
          "Interactive visualizations",
          "Real-time status displays",
          "Customizable audio controls",
          "Enhanced user experience with intuitive controls and dark mode interface",
        ],
        link: "https://www.figma.com/community/file/1353915728978059810/speaker-audio-control-app-ui",
      },
      {
        title: "Stock Trading App UI",
        description: "User interface design for a stock trading application",
        features: [
          "Real-time updates",
          "Personalized watchlists",
        ],
        link: "https://www.instagram.com/p/CVSIWCfgo2u/?img_index=1",
      },
      {
        title: "Doctor Appointment App",
        description: "User interface design for a doctor appointment application",
        features: [
          "Streamlined booking",
          "Telemedicine interface",
        ],
        link: "https://www.instagram.com/p/CVUeCmYDial/?img_index=1",
      },
      {
        title: "Google Pixel 6 Trend Design",
        description: "Concept design based on Google's Material You design language",
        link: "https://www.instagram.com/p/CVRyGvlFW5s/?img_index=1",
      },
    ],
  };

  return (
    <div className={`recent-work ${darkMode ? 'dark-mode' : ''}`}>
      <div className="container">
        <SectionTitle>Coding Projects</SectionTitle>
        <div className="projects-grid">
          {projects.coding.map((project, index) => (
            <ProjectItem key={`coding-${index}`} {...project} />
          ))}
        </div>

        <SectionTitle>UI/UX Projects</SectionTitle>
        <div className="projects-grid">
          {projects.uiux.map((project, index) => (
            <ProjectItem key={`uiux-${index}`} {...project} />
          ))}
        </div>

        <SectionTitle>Additional Projects</SectionTitle>
        <div className="additional-projects">
          <ul className="additional-projects-list">
            {[
              "Hash Password Generator: Secure password hashing tool",
              "Linktree Clone: Customizable link-sharing platform",
              "YouTube Video Downloader Bot: Automated video download utility",
              "IoT-enabled Momento: Smart souvenir with internet connectivity",
              "QR Code Menu System: Contactless restaurant menu solution",
              "Plant Disease Detection: Image processing for agricultural diagnostics",
              "20+ Freelance Projects: Increased engagement by avg. 35%, improved conversion rates up to 25%",
            ].map((item, index) => (
              <li key={index} className="additional-project-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentWork;