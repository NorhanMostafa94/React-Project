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

    state = intState;

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
        let userErr = "";
        let pwErr = "";
        
        const usersFound=users.filter(user=>user.firstname === this.state.username && user.password === this.state.password)
        if(usersFound.length!==0){
            const userId=Number(usersFound.map(u=>u.id).toString())
            this.setState({userErr: "", pwErr: "", result:userId},()=>{
                console.log(this.state.result)
            usersFound.map(user => user.firstname === this.state.username && user.password === this.state.password&&user.admin === true ?
                this.props.history.push("/admin")
                : this.props.history.push("/")
                )
            })
        }
        else{
            users.filter(user=>(user.firstname !== this.state.username)?
            userErr= "check the name" 
            :( user.firstname === this.state.username && user.password !== this.state.password)?
            pwErr= "check the password"
            :userErr= " " ,pwErr= " "
            )
       
            if (userErr||pwErr) {
                this.setState({userErr:userErr,pwErr:pwErr,result:0 })
                return false
            }
        }
                       
        
        
    }
  
 
   
    
    handleSubmit=(value)=>(e)=>{
        //console.log("hiiiiiii")
        e.preventDefault();
        this.search(value)
       
    }
    render() { 
        return ( 
            <Context.Consumer>
                {
                    value => (
                        <div className="row my-2 login-cont  p-5">
                        <div className="col-md-4"></div>
                        <div className="col-md-4 mr-3  text-center">
                        <form className="  form-group sign-cont login-container p-4 " action="/action_page.php" onSubmit={this.handleSubmit(value.state.users)}>
                        <div className="card-title mb-4">Welcome To Admin Panel</div>
                        <div className="imgcontainer m-2"><img src={img} className="avatar" alt="login"/></div>
                        <input  type="text" name= "username" placeholder="Enter Your UserName" className="form-control my-2" value={this.state.username} onChange={this.handleChange}></input>
                        <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.userErr}
                            </div>
                        <input type="password" name= "password" placeholder="Enter Your Password" className="form-control my-2" value={this.state.password} onChange={this.handleChange}></input>
                        <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.pwErr}
                            </div>
                        <button type="submit" className="btn log-btn m-auto  my-2" >Log In</button>
                        </form>
                        </div>
                        <div className="col-md-3"></div>
                        </div>
                    )
                }
                </Context.Consumer>

         );
    }
}
 
export default withRouter(Login);