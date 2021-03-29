import React ,{ Component } from 'react';
import {HomePage} from "./pages/homepage/homepage.component"
import {Route} from "react-router-dom"
import './App.css';
import Shop from "./pages/shopage/shoppage.component"
import Header from "./components/header/header.component" 
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth} from "./firebase/firebase.utils"

class App extends Component{ 
  constructor(){
    super();
    this.state={
      currentUser:null // null -> false 
    }
  }
  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user})
      console.log(user.displayName)
    })
  }
  
  render(){
    return (
      <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/signin" component={SignInAndSignUp} />
      </div>
    );
  }
} 

export default App;
