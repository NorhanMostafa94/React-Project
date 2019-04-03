import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import SearchBar from '../Search/Search';

const NavBar = () => {
    return (
        <Navbar bg="" variant="dark" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{background:'gray',right:0,position:'absolute',}}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" >Home</Link>
                    <Nav.Link></Nav.Link><Link to="/categories" >Categories</Link>
                    <Nav.Link></Nav.Link><Link to="/authors" style={{ color: '#404044', textDecoration: 'none' }}>Authors</Link>
                    <Nav.Link></Nav.Link><Link to="/books" >Books</Link>
                    <Nav.Link></Nav.Link><Link to="/mybooks" >My Books</Link>
                </Nav>
            </Navbar.Collapse>
            <SearchBar/>
        </Navbar>
    )
}

export default NavBar;