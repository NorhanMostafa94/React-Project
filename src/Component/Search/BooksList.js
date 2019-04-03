import React, { Component } from 'react';
import BookCard from './BookCard';
import {Context} from '../../App';


class Books extends Component {
    state = {  }
    render() { 
        return ( 
            <Context.Consumer>
            {
                value => (
                   // console.log(value.state.searchResult)
                  (value.state.searchResult) ?
            <div className="row">
            {value.state.searchResult.map(e => <BookCard key={e.id} title={e.title} id={e.id} src={e.cover} className="col-sm-4"
              
           />)}
          </div>
          : <h4>No Results</h4>
            )
        }
        </Context.Consumer>
         );
    }
}
 
export default Books;
