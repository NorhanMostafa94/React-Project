import React, { Component }  from 'react';
import { Link} from 'react-router-dom';
import {Context} from '../../App';

class BookCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:this.props.id,
            title:this.props.title,
            src:this.props.src,
        }
    }
    render() { 
       
       

        return ( 
            <Context.Consumer>
                {
                    value => (
            <div className=" container search-cont sch-result"key={this.state.id}>
            <div className="row">
               <Link to ={`/books/${this.state.id}`}> <h6 className="card-title  col-md-9">{this.state.title}</h6></Link>

                <img src={this.state.src} alt ="book" style={{height:"2.5rem"}}/>

                </div>
                </div>
                 )
                }
            </Context.Consumer>
            
         );
    }
}
 
export default BookCard;