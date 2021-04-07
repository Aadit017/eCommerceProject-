import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux';
ReactDOM.render(
  <Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>
  ,
document.getElementById('root')
);