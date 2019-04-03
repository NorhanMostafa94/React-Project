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
            <div>
            {value.state.searchResult.map(e => <BookCard key={e.id} title={e.title} id={e.id} src={e.cover}
              
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
