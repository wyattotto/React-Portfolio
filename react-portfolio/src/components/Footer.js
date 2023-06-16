import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons
import './Footer.css';

const Footer = () => {
  return (
    <footer style={{display: "flex", justifyContent: "center", padding: "1em"}}>
      <a href="https://github.com/wyattotto" target="_blank" rel="noreferrer" style={{marginRight: "1em"}}>
        <FaGithub size="1.5em" />  {/* GitHub icon */}
      </a>
      <a href="https://www.linkedin.com/in/wyatt-otto-545ab615a/" target="_blank" rel="noreferrer">
        <FaLinkedin size="1.5em" />  {/* LinkedIn icon */}
      </a>
    </footer>
  );
};

export default Footer;
