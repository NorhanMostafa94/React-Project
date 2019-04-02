import React, { Component }  from 'react';

import {Context} from '../../App';

class BookCard extends Component {
    constructor(props){
        super(props);
        this.state ={
            id:this.props.id,
            name:this.props.name,
            by:this.props.by,
            desc:this.props.desc,
            imgsrc:this.props.imgsrc,
        }
    }
    render() { 
       
       

        return ( 
            <Context.Consumer>
                {
                    value => (
            <div className="card ">
                <h2 className="card-title">{this.state.name}</h2>

                <img src={this.state.imgsrc} alt ="book"/>
                <h5 >{this.state.by}</h5>
                <h5 >{this.state.desc}</h5>
               
                </div>
                 )
                }
            </Context.Consumer>
            
         );
    }
}
 
export default BookCard;