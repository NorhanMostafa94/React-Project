import React, { Component }  from 'react';
import { withRouter} from 'react-router';
import {Context} from '../../App';



class SearchBar extends Component {
   
    state = { 
        search:'',
        book:[],
        nores:''
     }
     handleChange=(books,res)=>(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        
        
        if(value===''){
            this.setState({ book: [], search:''},()=>{
                res([])
                this.props.history.goBack();
            });
           
        }
        
        else{
            this.setState({ [name]: value },()=>{
                console.log(this.state)
            const choosedBook=  books.filter(m => m.title.toLowerCase().includes(value.toLowerCase()))
           
              if(choosedBook.length!==0){
                this.setState({ book: choosedBook, search:value},()=>{
                    res(this.state.book)
                        console.log(choosedBook)
                        this.props.history.push("/results")
                    });
              }
              else{
                  this.setState({book: [], search:value},()=>{
                    res(this.state.book)
                    console.log(choosedBook)
                    this.props.history.push("/results")
                })
              }
          
            }
        
            )}
       
     }

    
   
    render() { 
        return ( 
            <Context.Consumer>
            {
                value => (
                   <>
                   {/* <div>
                    <input type="Text" placeholder="search books" value={this.state.search} onChange={this.handleChange(value.state.books,value.SearchRes)} name="search"/>
                    </div> */}
                        <div className=" h-100">
                            <div className="d-flex justify-content-center h-100">
                                <div className="searchbar">
                                    <input className="search_input"  placeholder="search books" value={this.state.search} onChange={this.handleChange(value.state.books,value.SearchRes)} name="search"/>
                                        <a href="#" className="search_icon"><i className="fas fa-search"></i></a>
                                </div>
                            </div>
                        </div>
                   
                   </> 
                )
            }
            </Context.Consumer>
         );
    }
}
 
export default withRouter (SearchBar);