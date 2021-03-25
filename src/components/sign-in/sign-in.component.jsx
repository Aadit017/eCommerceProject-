import React, { Component } from "react"

class SignIn extends Component{ 
    constructor(props){
        super(props);
        this.state={
            email:'',
            password: '' 
        }
    }
    handleSubmit=event=>{
        event.preventDefault();
        // after submitting we are setting the email and the password back as empty fiedls 
        this.setState({email:'',password:''})
    }
    handleChangeEmail=event=>{
        const {value, name}=event.target;
        this.setState({[name]:value})
    }
    handleChangePassword=event=>{
        const {value,name} =event.target ;
        this.setState({[name]:value})
    
    }
    
//! in the code below the [] on name is very important 
render(){
    return(
        <div className="sign-in" >
            <h2>I already have an account </h2>
            <span> sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <input type="email" name="email" value={this.state.email} placeholder="enter your email" required 
                                onChange={this.handleChangeEmail}
            />
            <label>Email</label>
            <input type="password" name="password" value={this.state.password} placeholder="enter your password" required 
                onChange={this.handleChangePassword}    
            />
            <label>Password</label>
            <input type="submit" value="Submit-form" />
        </form>
        </div>
    )
}
}
export default SignIn