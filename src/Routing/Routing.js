import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  MainPage  from '../Component/MyBooks/MainPage';
import BookDetails from '../Component/Books/BookDetails'

const Routing = () => {
   
    return (
      
        <BrowserRouter>
            <Switch>
          
                <Route exact path="/" component={MainPage}></Route>
                <Route exact path="/books/:bookid" component={BookDetails}></Route>
                
            </Switch>
        </BrowserRouter>

    )
}
export default Routing;