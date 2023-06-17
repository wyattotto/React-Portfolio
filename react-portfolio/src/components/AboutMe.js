import React from 'react';
import Image3 from  './imgs/Wyatt Headshot.jpg'
const AboutMe = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <img src= {Image3} alt="your name" className="img-thumbnail"/>
          </div>
          <div className="col">
            <p>Wyatt Otto is a 24-year-old aspiring professional currently enrolled in the Georgia Tech coding bootcamp. With a keen interest in technology and a passion for coding, Wyatt is determined to advance his career in the field. Motivated by the ever-evolving world of software development, he is committed to enhancing his skills and knowledge to thrive in this dynamic industry. Wyatt's enrollment in the Georgia Tech coding bootcamp demonstrates his dedication to gaining practical experience and acquiring the necessary expertise to excel in his chosen career path. With his enthusiasm and drive, Wyatt Otto is poised to make a significant impact in the coding field and pursue exciting opportunities that lie ahead.</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutMe;