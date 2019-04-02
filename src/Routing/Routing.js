import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../Component/MyBooks/MainPage';

import CategoriesList from '../Component/Categories/List';
import Category from '../Component/Categories/Category';

import AuthorsList from '../Component/Authors/List';
import AuthorDetails from '../Component/Authors/Details'

import BooksList from '../Component/Books/List';
import SearchBar from '../Component/Search/Search';
import Login from '../Component/Forms/login';


const Routing = () => {

    return (

        <Switch>
            <Route exact path="/"></Route>
            {/* <Route exact path="/books/:bookid" component={BookDetails}></Route> */}
            <Route path='/books/:id' component={BookDetails} />
            <Route path='/categories/:id' component={Category} />
            <Route path='/authors/:id' component={AuthorDetails} />
            <Route path='/categories' component={CategoriesList} />
            <Route path='/authors' component={AuthorsList} />
            <Route path='/books' component={BooksList} />
            <Route path='/mybooks' component={MainPage} />
            <Route path='/login' component={Login} />
            <Route path='/' component={SearchBar} />
            
        </Switch>
    )
}
export default Routing;