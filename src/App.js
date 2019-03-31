import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import '../src/CSS/style.css'

import { Navbar, Nav } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//Json
// import DB from './db'
// Component
import CategoriesList from './Component/Categories/List';
import Category from './Component/Categories/Category';

import AuthorsList from './Component/Authors/List';

import BooksList from './Component/Books/List';

import { categories, authors, books } from './data';


import './App.css';

export const Context = React.createContext();

class App extends Component {
  state = {
    categories: categories,
    authors: authors,
    books: books
  }

  getCategories = (categories) => {
    // console.log(1)
    // debugger
    this.setState({ categories: categories })
    console.log(this.state.categories)
  }
  render() {
    const value = {
      state: this.state,
      getCategories: this.getCategories
    }
    return (
      <Context.Provider value={value}>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>My First React-App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Link to="/categories" style={{ color: '#F8F9FA', textDecoration: 'none' }}>categories</Link>
                <Nav.Link></Nav.Link><Link to="/authors" style={{ color: '#F8F9FA', textDecoration: 'none' }}>Authors</Link>
                <Nav.Link></Nav.Link><Link to="/books" style={{ color: '#F8F9FA', textDecoration: 'none' }}>Books</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path='/categories/:id' component={Category} />
            <Route path='/books/:id' component={BooksList} />
            <Route path='/authors/:id' component={BooksList} />
            <Route path='/categories' component={CategoriesList} />
            <Route path='/authors' component={AuthorsList} />
            <Route path='/books' component={BooksList} />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;
