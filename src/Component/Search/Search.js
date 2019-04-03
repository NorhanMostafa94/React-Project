import React, { Component }  from 'react';
// import BooksList from './BooksList';

// import categories from '../../data';
import { withRouter} from 'react-router';
import {Context} from '../../App';



class SearchBar extends Component {
    constructor(props){
        super(props);
    }
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
            // this.setState({ book: choosedBook, search:value},()=>{
            //     res(choosedBook)
            //     console.log(choosedBook)
            //     this.props.history.push("/results")
            // });
            //this.props.searchResult=this.state.book;
            // if()
                //const notFound=  books.filter(m => !m.title.toLowerCase().includes(value.toLowerCase()))
              if(choosedBook.length!=0){
                this.setState({ book: choosedBook, search:value},()=>{
                        res(choosedBook)
                        console.log(choosedBook)
                        this.props.history.push("/results")
                    });
              }
              else{
                  this.setState({nores:'not found'})
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
                   <div>
                    <input type="Text" placeholder="search books" value={this.state.search} onChange={this.handleChange(value.state.books,value.SearchRes)} name="search"/>
                    </div>
                    {/* <div>
                      {this.state.book.map(e => <BookCard className="sch-result" key={e.id} title={e.title} id={e.id} src={e.cover}
                       
                     />)}
                    </div> */}
                    
                    {/* <div>
                    <Link to ={"/results"}>Your Search Results </Link> 
                    </div> */}
                   
                   </> 
                )
            }
            </Context.Consumer>
         );
    }
}
 
export default withRouter (SearchBar);