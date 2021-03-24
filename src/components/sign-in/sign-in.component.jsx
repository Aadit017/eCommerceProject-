import React, { Component } from "react"
import "./sign-in-and-sign-up.style.scss"

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
        this.setState({email:' ',password:' '})
    }
render(){
    return(
        <div className="sign-in" >
            <h2>I already have an account </h2>
            <span> sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <input type="email" name="email" value={this.state.email} placeholder="enter your email" required />
            <label>Email</label>
            <input type="password" name="password" value={this.state.password} placeholder="enter your password" required />
            <label>Password</label>
            <input type="submit" value="Submit-form" />
        </form>
        </div>
    )
}
}
export default SignIn