import React from 'react';
const Portfolio = () => {
    const projects = [
      // your projects here
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