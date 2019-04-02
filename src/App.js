import React, { Component } from 'react';
import { BrowserRouter} from 'react-router-dom';
// import '../public/Css/syle.css'
import '../src/CSS/style.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainPage from '../src/Component/MyBooks/MainPage'
import BookDetails from './Component/Books/Details';

//Json
// import DB from './db'
// Component
import NavBar from './Component/Navbar/Navbar';
import Routing from './Routing/Routing';
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
       //<BookDetails />
      //<MainPage />
      
      <Context.Provider value={value}>
        <BrowserRouter>
          <NavBar></NavBar>
         <Routing></Routing>
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;
