import React from 'react';
import Image1 from './imgs/feastfinder.png'
import Image2 from './imgs/background.jpg'
const Portfolio = () => {
    const projects = [
        {
          title: 'Feast Finder',
          image: Image1 ,
          liveLink: 'https://protected-mesa-32753.herokuapp.com/',
          githubLink: 'https://github.com/jmfarthin/Feast-Findr',
        },
        {
          title: 'Emergency Iron',
          image: Image2,
          liveLink: 'https://github.com/jmfarthin/emergency-iron-project',
          githubLink: 'https://github.com/jmfarthin/emergency-iron-project',
        },
        // Add more projects as needed
      ];
    
    return (
      <div className="container">
        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-sm-6">
              <div className="card">
                <img src={project.image} className="card-img-top" alt={project.title}/>
                <div className="card-body">
                  <h3 className="card-title">{project.title}</h3>
                  <a href={project.liveLink} className="btn btn-primary">Live Version</a>
                  <a href={project.githubLink} className="btn btn-secondary">GitHub</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Portfolio;