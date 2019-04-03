import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
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
    emailErr:''
}


class SignForm extends Component {
   state = initialState;
   

   handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
}
validateEmail=(emailVal) =>{ 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailVal);
    }

validate = () => {
    let fnameErr = "";
    let lnameErr="";
    let PwErr = "";
    let CPwErr = "";
    let emailErr="";
    //const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    //
    if (!this.state.firstname||this.state.firstname.length<3) {
      fnameErr = "name cannot be blank or less  than 3 letters";
    }
    // 
       if (!this.state.lastname|| this.state.lastname.length<3){
        lnameErr = "name cannot be blank or less  than 3 letters";
      }

      if (!this.state.password|| this.state.password.length<3){
        PwErr = "password cannot be blank or less  than 3 letters";
      }
      if (this.state.ConfirmPassword!== this.state.password){
        CPwErr = "please confirm with the same password";
      }
       const m=this.validateEmail(this.state.email)
      if(!m){
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

                        <form className="card text-center" onSubmit={this.handleSubmit(value.addUser)}>
                        <h4><div className="card-title mb-4">Sign Up</div></h4>
                            <div>
                                
                                <input
                                className="grey-text"
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
                            <button type="submit" className="btn-sign">Sign up</button>
                        </form>

                    )
                }
            </Context.Consumer>
        );
    }
}

export default SignForm;