import React, { Component }  from 'react';
// import BooksList from './BooksList';
import BookCard from './BookCard';
// import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
// import categories from '../../data';
import {Context} from '../../App';



class SearchBar extends Component {
    state = { 
        search:'',
        book:[]
     }
     handleChange=(books)=>(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        
        
        if(value===''){
            this.setState({ book: [], search:''});
        }
        else{
            this.setState({ [name]: value })
        const choosedBook=  books.filter(m => m.name.toLowerCase().includes(value.toLowerCase()))
            this.setState({ book: choosedBook, search:value});
        }
       
     }

    
   
    render() { 
        return ( 
            <Context.Consumer>
            {
                value => (
                   <>
                   <div>
                    <input type="Text" placeholder="search books" onChange={this.handleChange(value.state.books)} name="search"/>
                    </div>
                    <div>
                      {this.state.book.map(e => <BookCard key={e.id} name={e.name} id={e.id} 
                       
                     />)}
                    </div>
                   
                   </> 
                )
            }
            </Context.Consumer>
         );
    }
}
 
export default SearchBar;