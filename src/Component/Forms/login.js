import React, { Component } from 'react';
import { withRouter} from 'react-router';
import {Context} from '../../App';
import img from '../../assets/images/7.png';
// import AuthorsList from '../../Component/Authors/List';
// import MainPage from '../../Component/MyBooks/MainPage';
// import {Redirect } from 'react-router';


const intState={
    username:'',
        password:'',
        userErr:'',
        pwErr:'',
        admin:true,
        result:0
}

class Login extends Component {
    constructor(props){
        super(props)
        
    }
  // history  = this.props;
    state = intState;
    // user:this.props.location.state? 
    //  this.props.history.push("/")

    
   
    handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value }
        ,
      ()=>{
        console.log(this.state);
      }  
        )
    }
    search(users) {
        const adminUsers = users.filter(user => user.admin === true);
        console.log(adminUsers)
        
        adminUsers.map(item => {
           
            if (item.firstname !== this.state.username) {
                this.setState({ userErr: "check the name", pwErr:"" ,result:0},()=>{
                    console.log(this.state.result)  
                 
            })
        }
            if (item.password !== this.state.password) {
                this.setState({ userErr: " ", pwErr: "check the password" ,result:0 } ,()=>{
                   console.log(this.state.result)  
                  
                })
              
            }
            if (item.firstname === this.state.username && item.password === this.state.password) {
                this.setState({userErr: "", pwErr: "", result:item.id},()=>{
                      console.log(this.state.result)
                  
               this.props.history.push("/authors")
                    } )
                
            }

           // this.setState(intState)

        });
      // 
    }
  
 
   
    
    handleSubmit=(value)=>(e)=>{
        console.log("hiiiiiii")
        e.preventDefault();
        this.search(value)
        
        
        // if(res===0){  
        //     console.log(res)  
        //       return  <Link to ={"/admin"}> </Link> 
        // }
        // else
        //    // <Link to = {"/admin/:id"}></Link>
        //    console.log(res)
        //    return <Link to = {"/signup"}></Link>

    }
    render() { 
        return ( 
            <Context.Consumer>
                {
                    value => (
                        <div className="container text-center">
                        <form className="  card  text-center m-5 login-cont" action="/action_page.php" onSubmit={this.handleSubmit(value.state.users)}>
                        <div className="card-title">Welcome To Admin Panel</div>
                        <div className="imgcontainer m-2"><img src={img} className="avatar" alt="login"/></div>
                        <input  type="text" name= "username" placeholder="Enter Your UserName" className="un m-2" value={this.state.username} onChange={this.handleChange}></input>
                        <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.userErr}
                            </div>
                        <input type="password" name= "password" placeholder="Enter Your Password" className="pw m-2" value={this.state.password} onChange={this.handleChange}></input>
                        <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.pwErr}
                            </div>
                        <button type="submit" className="log-btn m-auto  my-2" >Log In</button>
                        </form>
                        </div>
                    )
                }
                </Context.Consumer>

         );
    }
}
 
export default withRouter(Login);