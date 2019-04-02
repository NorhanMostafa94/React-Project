import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from '../Component/MyBooks/MainPage';
// import BookDetails from '../Component/Books/BookDetails'

import CategoriesList from '../Component/Categories/List';
import Category from '../Component/Categories/Category';

import AuthorsList from '../Component/Authors/List';

import BooksList from '../Component/Books/List';

const Routing = () => {

    return (

        <Switch>
            <Route exact path="/"></Route>
            {/* <Route exact path="/books/:bookid" component={BookDetails}></Route> */}
            <Route path='/categories/:id' component={Category} />
            <Route path='/books/:id' component={BooksList} />
            <Route path='/authors/:id' component={BooksList} />
            <Route path='/categories' component={CategoriesList} />
            <Route path='/authors' component={AuthorsList} />
            <Route path='/books' component={BooksList} />
            <Route path='/mybooks' component={MainPage} />
        </Switch>
    )
}
export default Routing;