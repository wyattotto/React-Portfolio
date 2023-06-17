import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import '../Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <div className="container-fluid">
        <div className="navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <NavLink to="/portfolio" className="nav-link" activeClassName="active">Portfolio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/resume" className="nav-link" activeClassName="active">Resume</NavLink>
            </li>
          </ul>
        </div>
        <NavLink exact to="/" className="navbar-brand" activeClassName="active">About Me</NavLink>
      </div>
    </nav>
  );
};

export default Navigation;