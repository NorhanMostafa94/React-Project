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
    categories: ''
  }
  // componentDidMount(){
  //   fetch('http://localhost:3000/Categories',{method:'GET'})
  //   .then(res => res.json())
  //   .then(json=>{
  //     this.setState({categories:json})
  //   })
  // }
  getCategories = (categories) => {
    this.setState({ categories })
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
                <Nav.Link></Nav.Link><Link to="/users" style={{ color: '#F8F9FA', textDecoration: 'none' }}>Profile</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Switch>
            <Route path='/categories/:id' component={Category} />
            <Route path='/categories' component={CategoriesList} />
          </Switch>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;
