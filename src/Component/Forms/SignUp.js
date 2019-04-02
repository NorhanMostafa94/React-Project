import React, { Component } from 'react';
import uuidv4 from 'uuid/v4';
import {Context} from '../../App';

const initialState={
    firstname: '',
    lastname: '',
    password: '',
    ConfirmPassword: '',
    admin: false,
    fnameErr: '',
    lnameErr: '',
    PwErr: '',
    CPwErr: ''
}


class SignForm extends Component {
   state = initialState;
   

   handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value })
}

validate = () => {
    let fnameErr = "";
    let lnameErr="";
    let PwErr = "";
    let CPwErr = "";
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
    if (fnameErr||lnameErr|| PwErr ||CPwErr) {
        this.setState({fnameErr,lnameErr,PwErr,CPwErr})
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
            firstname: this.state.firstname, lastname:this.state.lastname,password:this.state.password ,id: uuidv4(),
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

                        <form onSubmit={this.handleSubmit(value.addUser)}>
                        <h4><div>Sign Up</div></h4>
                            <div>
                                <h6>First Name 
                                <input
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={this.state.firstname}
                                    onChange={this.handleChange}
                                />
                                </h6>
                            </div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.fnameErr}
                            </div>
                            <div>
                            <h6>Last Name<input
                                    type="text"
                                    name="lastname"
                                    placeholder="Last Name"
                                    value={this.state.lastname}
                                    onChange={this.handleChange}
                                />
                                </h6>
                            </div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.lnameErr}
                            </div>
                            <div>
                              <h6>Password <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                />
                                </h6> 
                            </div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.PwErr}
                            </div>
                            <div>
                            <h6>Confirm Password <input
                                    type="password"
                                    name="ConfirmPassword"
                                    placeholder="confirm password"
                                    value={this.state.ConfirmPassword}
                                    onChange={this.handleChange}
                                />
                                </h6>
                            </div>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {this.state.CPwErr}
                            </div>
                            <button type="submit">Sign up</button>
                        </form>

                    )
                }
            </Context.Consumer>
        );
    }
}

export default SignForm;