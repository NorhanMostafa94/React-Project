import React, { Component } from 'react';
import BookCard from './BookCard';
import img from '../../assets/images/88.png';
import {Context} from '../../App';


class Books extends Component {
    state = {  }
    render() { 
        return ( 
            <Context.Consumer>
            {
                value => (
                   // console.log(value.state.searchResult)
                  (value.state.searchResult.length>0) ?
            <div className="row">
            {value.state.searchResult.map(e => <BookCard key={e.id} title={e.title} id={e.id} src={e.cover} className="col-sm-4"/>)}
          </div>
          : <div><h5 className="no-result">No Results Found</h5><img src={img} alt="no result"/></div>
            )
        }
        </Context.Consumer>
         );
    }
}
 
export default Books;
