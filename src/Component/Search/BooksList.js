import React, { Component } from 'react';
import BookCard from './BookCard';
import {Context} from '../../App';


class BooksList extends Component {
    state = {  }
    render() { 
        return ( 
            <Context.Consumer>
            {
                value => (
                  (value.state.searhResult) ?
            <div>
            {value.state.searhResult.map(e => <BookCard key={e.id} name={e.name} id={e.id} by={e.by} desc={e.desc}imgsrc={e.imgsrc}
              
           />)}
          </div>
          : <h4>No Results</h4>
            )
        }
        </Context.Consumer>
         );
    }
}
 
export default BooksList;
