import React ,{ useState, useEffect } from 'react';
import {HomePage} from "./pages/homepage/homepage.component"
import {Route} from "react-router-dom"
import './App.css';
import Shop from "./pages/shopage/shoppage.component"
import Header from "./components/header/header.component" 
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component"

function App() {
  return (
    <div className="App">
    <Header />
    <Route exact path="/" component={HomePage} />             
    <Route exact path="/shop" component={Shop} />
    <Route exact path="/signin" component={SignInAndSignUp} />
    </div>
  );
} 
export default App;
