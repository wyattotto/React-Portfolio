import React from 'react';
const Portfolio = () => {
    const projects = [
        {
          title: 'Feast Finder',
          image: 'https://via.placeholder.com/150',
          liveLink: 'https://example.com/project1',
          githubLink: 'https://github.com/username/project1',
        },
        {
          title: 'Project 2',
          image: 'https://via.placeholder.com/150',
          liveLink: 'https://example.com/project2',
          githubLink: 'https://github.com/username/project2',
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