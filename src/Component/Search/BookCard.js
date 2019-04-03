import React, { Component }  from 'react';
import { Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';
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
                        <Card className="col-md-2 m-4" key={this.state.id}>
                        <Card.Img  src={this.state.src} />
                        <Card.Body>
                        <Link to ={`/books/${this.state.id}`}> <Card.Title>{this.state.title}</Card.Title></Link>
                           
                          </Card.Body>
                      
                          </Card>
                 )
                }
            </Context.Consumer>
            
         );
    }
}
 
export default BookCard;


 
//    <div >
//    <div className="row">
//       <Link to ={`/books/${this.state.id}`}> <h6 className="card-title  col-md-9">{this.state.title}</h6></Link>
   
//        <img src={this.state.src} alt ="book" style={{height:"2.5rem"}}/>
   
//        </div>
//        </div>