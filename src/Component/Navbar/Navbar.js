import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" style={{ color: '#F8F9FA', textDecoration: 'none' }}>Home</Link>
                    <Nav.Link></Nav.Link><Link to="/categories" style={{ color: '#F8F9FA', textDecoration: 'none' }}>Categories</Link>
                    <Nav.Link></Nav.Link><Link to="/authors" style={{ color: '#F8F9FA', textDecoration: 'none' }}>Authors</Link>
                    <Nav.Link></Nav.Link><Link to="/books" style={{ color: '#F8F9FA', textDecoration: 'none' }}>Books</Link>
                    <Nav.Link></Nav.Link><Link to="/mybooks" style={{ color: '#F8F9FA', textDecoration: 'none' }}>My Books</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;