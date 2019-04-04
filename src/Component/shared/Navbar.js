import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import SearchBar from "../Search/Search";

const NavBar = () => {
    return (
        <Navbar bg="" variant="dark" expand="lg" style={ {marginLeft: '23rem'}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{background:'gray',right:0,position:'absolute',}}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="Nav-title" style={{ textDecoration: 'none' }} >Home</Link>
                    <Nav.Link></Nav.Link><Link to="/categories" style={{ textDecoration: 'none' }}  className="Nav-title" >Categories</Link>
                    <Nav.Link></Nav.Link><Link to="/authors" style={{ textDecoration: 'none' }} className="Nav-title">Authors</Link>
                    <Nav.Link></Nav.Link><Link to="/books" style={{ textDecoration: 'none' }}  className="Nav-title"  >Books</Link>
                    <Nav.Link></Nav.Link><Link to="/mybooks" style={{ textDecoration: 'none' }}  className="Nav-title" >My Books</Link>
                </Nav>
            </Navbar.Collapse>
            <SearchBar/>
        </Navbar>
    ) 
}

export default NavBar;
