import React, { Component } from "react"
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
// import {signInWithGoogle} from "../../firebase/firebase.utils"
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
    //! after v1 commit of this file , the handle change was modified in a way to 
    //! reduce the number of codes 
//? in the code below the [] on name is very important 
render(){
    return(
        <div className="sign-in" >
            <h2>I already have an account </h2>
            <span> sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
            <FormInput type="email" name="email" value={this.state.email} placeholder="abc@xyz.com" required 
                                handleChange={this.handleChangeEmail} label="Email"
            />
            <FormInput type="password" name="password" value={this.state.password} placeholder="........" required 
                handleChange={this.handleChangePassword} label="Password"
            />
<CustomButton type="submit">Sign in</CustomButton>
{/* <CustomButton type="button" onClick={signInWithGoogle}>
Sign-In With Google
</CustomButton> */}
        </form>
        </div>
    )
}
}
export default SignIn