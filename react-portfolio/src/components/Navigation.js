import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Your Name</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/">About Me</Nav.Link>
                    <Nav.Link href="/portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link href="/resume">Resume</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;