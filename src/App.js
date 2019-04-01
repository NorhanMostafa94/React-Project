import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import { Navbar, Nav } from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
  
  getCategories=(categories)=>{
    // console.log(1)
    this.setState({ categories:categories })
  }
  render() {
    const value = {
      state: this.state,
      getCategories: this.getCategories
    }
    return (
<<<<<<< HEAD
      <div className="App">
       
      </div>
=======
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
      </Context.Provider>
>>>>>>> 30000d8b918c055e7c36e266f2af1d72ca4856cd
    );
  }
}

export default App;
