import React from 'react';
import {HomePage} from "./pages/homepage/homepage.component"
import {Route} from "react-router-dom"
import './App.css';
import Shop from "./pages/shopage/shoppage.component"
import Header from "./components/header/header.component" 

function App() {
  return (
    <div className="App">
    <Header />
    <Route exact path="/" component={HomePage} />             
    <Route exact path="/shop" component={Shop} />
    </div>
  );
} 
export default App;
