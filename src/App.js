import React ,{ Component } from 'react';
import {HomePage} from "./pages/homepage/homepage.component"
import {Route} from "react-router-dom"
import './App.css';
import Shop from "./pages/shopage/shoppage.component"
import Header from "./components/header/header.component" 
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"
import {auth, createUserProfileDocument} from "./firebase/firebase.utils"
import { connect } from "react-redux"
import { setCurrentUser } from './redux/user/user.action';
class App extends Component{  
  constructor(){
    super();
    this.state={
      currentUser:null // null -> false 
    }
  }   
  unsubscribeFromAuth=null;
  componentDidMount(){
    this.unsubscribeFromAuth=auth.onAuthStateChanged(async user=>{
      createUserProfileDocument(user)
      console.log(this.state.currentUser)
    })
  }
 render(){ 
  console.log(this.state.currentUser)
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
const mapDispatchToProps= dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser)
})
export default connect(null ,mapDispatchToProps)(App);
