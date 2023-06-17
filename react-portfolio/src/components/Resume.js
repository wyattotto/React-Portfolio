import React from 'react';
const Resume = () => {
  return (
    <div className="container" style={{backgroundColor: '#D3D3D3'}}>
      <a href="https://docs.google.com/document/d/1whLTjxrZkC79rsuYmdwZitq2BMPRlbo3TAwudaU_aYc/edit?usp=drive_link" className="btn btn-primary">Downloadable Resume</a>
      <ul className="list-group">
        <li className="list-group-item">React</li>
        <li className="list-group-item">SQL</li>
      </ul>
    </div>
  );
};

export default Resume;