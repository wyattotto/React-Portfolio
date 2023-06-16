import React from 'react';
const Contact = () => {
    return (
      <form className="container">
        <div className="mb-3">
          <input type="text" className="form-control" name="name" placeholder="Your Name" required/>
        </div>
        <div className="mb-3">
          <input type="email" className="form-control" name="email" placeholder="Your Email" required/>
        </div>
        <div className="mb-3">
          <textarea className="form-control" name="message" placeholder="Your Message" required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  };
  
  export default Contact;