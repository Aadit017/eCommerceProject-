import React from 'react';
import {HomePage} from "./pages/homepage/homepage.component"
import {Route} from "react-router-dom"
import './App.css';
const Hats= () => (
  <div>
    <h1>Hats page boi!</h1>
  </div> 
)
function App() {
  return (
    <div className="App">
    <Route exact path="/" component={HomePage} />             
    <Route exact path="/hats" component={Hats} />
    </div>
  );
} 
export default App;
