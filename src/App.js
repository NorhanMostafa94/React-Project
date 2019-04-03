import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
// import '../public/Css/syle.css'
import "../src/CSS/style.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import MainPage from '../src/Component/MyBooks/MainPage'
// import BookDetails from './Component/Books/Details';

//Json
// import DB from './db'
// Component
import NavBar from "./Component/Navbar/Navbar";
import Routing from "./Routing/Routing";

import { categories, authors, books, users } from "./data";

import "./App.css";
import SearchBar from "./Component/Search/Search";

export const Context = React.createContext();

class App extends Component {
  state = {
    categories: categories,
    authors: authors,
    books: books,
    users:users,
    searchResult:[],
    popBooks:[books.filter(e=>e.rating==='5')]

    
  }

  getCategories = categories => {
    // console.log(1)
    // debugger
    this.setState({ categories: categories });
    console.log(this.state.categories);
  };
  addUser = user => {
   this.setState({ users: users.concat(user) })
   }
    SearchRes=(books)=>{

    this.setState({searchResult:books})
  }
  render() {
    const value = {
      state: this.state,
      getCategories: this.getCategories,
      addUser:this.addUser,
      SearchRes:this.SearchRes
    }
    return (
      //<BookDetails />
      //<MainPage />

      <Context.Provider value={value}>
        <BrowserRouter>
          <NavBar />

          <Routing />
        </BrowserRouter>
      </Context.Provider>
    );
  }
}

export default App;
