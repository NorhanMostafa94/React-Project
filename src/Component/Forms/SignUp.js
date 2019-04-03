import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import {validateEmail,isEmpty,length} from '../../Component/Forms/Validator';
import BookCard from '../Search/BookCard';
import {Context} from '../../App';

const initialState={
    firstname: '',
    lastname: '',
    password: '',
    ConfirmPassword: '',
    admin: false,
    email:'',
    fnameErr: '',
    lnameErr: '',
    PwErr: '',
    CPwErr: '',
    emailErr:'',
     validateEmail:validateEmail,
     isEmpty:isEmpty,
     length:length
}


class SignForm extends Component {
   state = initialState;
   

   handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
}
// validateEmail=(emailVal) =>{ 
//     var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(emailVal);
//     }

validate = () => {
    let fnameErr = "";
    let lnameErr="";
    let PwErr = "";
    let CPwErr = "";
    let emailErr="";
    

    if(isEmpty(this.state.firstname)||!length(this.state.firstname)){
        fnameErr = "name cannot be blank or contain spaces or less  than 3 letters ";
    }
    if(isEmpty(this.state.lastname)||!length(this.state.lastname)){
        lnameErr = "name cannot be blank or contain spaces or less  than 3 letters";
    }
    if(isEmpty(this.state.password)||!length(this.state.password)){
        PwErr = "password cannot be blank or contain spaces or less  than 3 letters";
    }
    if (this.state.ConfirmPassword!== this.state.password){
            CPwErr = "please confirm with the same password";
          }
    if (!validateEmail(this.state.email)){
        emailErr="please enter a valid email";
    }
  
      

    if (fnameErr||lnameErr|| PwErr ||CPwErr||emailErr) {
        this.setState({fnameErr,lnameErr,PwErr,CPwErr,emailErr})
        return false
    }

    return true
};

handleSubmit =(addUser)=> (e) => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
        console.log(this.state);
      const  newUser= {
            firstname: this.state.firstname, lastname:this.state.lastname,email:this.state.email,password:this.state.password ,id: uuidv4(),
          };
        addUser(newUser)
        console.log(newUser);
        // clear form
        this.setState(initialState);
       
    }
}


    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                       <>
                        
                        {console.log(value.state.popBooks)}

                        <div className="row">
                        <div className="col-md-6 ml-1">
                            { value.state.popBooks.map(

                                e => 
                               
                                <BookCard key={e.id} title={e.title} id={e.id} src={e.cover}  />
                               
                                            )}
                            </div> 
                           

                        
                        <form  onSubmit={this.handleSubmit(value.addUser)} className="col-md-4 m-3 text-center">
                        <div className="form-group ">
                        <h4><div className="card-title mb-4">Sign Up</div></h4>
                            <div>
                                
                                <input
                                className="form-control my-2"
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={this.state.firstname}
                                    onChange={this.handleChange}
                                />
                                
                            </div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.fnameErr}
                            </div>
                            <div>
                           <input
                                    className="form-control my-2"
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={this.state.lastname}
                                    onChange={this.handleChange}
                                />
                             
                            </div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.lnameErr}
                            </div>
                            <div>
                           <input
                                    className="form-control my-2"
                                    type="text"
                                    name="email"
                                    placeholder="E-mail"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                                
                            </div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.emailErr}
                            </div>
                            <div>
                             <input
                                    className="form-control my-2"
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                
                            </div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.PwErr}
                            </div>
                            <div>
                            <input
                                    className="form-control my-2"
                                    type="password"
                                    name="ConfirmPassword"
                                    placeholder="confirm password"
                                    value={this.state.ConfirmPassword}
                                    onChange={this.handleChange}
                                />
                                
                            </div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.CPwErr}
                            </div>
                            <button type="submit" className="btn btn-outline-secondary">Sign up</button>
                            </div>
                        </form>
                        </div>
                        
                        </>
                    )
                }
            </Context.Consumer>
        );
    }
}

export default SignForm;

{/* <div className="row">
{value.state.searchResult.map(e => <BookCard key={e.id} title={e.title} id={e.id} src={e.cover} className="col-sm-4"
  
/>)} */}