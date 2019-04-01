import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import Routing from './Routing/Routing'
import { Navbar, Nav } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainPage from '../src/Component/MyBooks/MainPage'
import BookDetails from '../src/Component/Books/BookDetails';

//Json
// import DB from './db'
// Component
import CategoriesList from './Component/Categories/List';
import Category from './Component/Categories/Category';

import './App.css';


export const Context = React.createContext();

class App extends Component {
  state = {
    categories: []
  }

  getCategories = (categories) => {
    // console.log(1)
    this.setState({ categories: categories })
  }
  render() {
    const value = {
      state: this.state,
      getCategories: this.getCategories
    }
    return (
      <>
        <BookDetails />
      </>

      /*
  <Context.Provider value={value}>
     <BrowserRouter>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand>My First React-App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/categories" style={{ color: '#F8F9FA', textDecoration: 'none' }}>categories</Link>
            <Nav.Link></Nav.Link><Link to="/users" style={{ color: '#F8F9FA', textDecoration: 'none' }}>Profile</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route path='/categories/:id' component={Category} render={()=>this.get(value.getCategories)}/>
        <Route path='/categories' component={CategoriesList} />
      </Switch>
    </BrowserRouter> 
  </Context.Provider>*/
    );
  }
}

export default App;
