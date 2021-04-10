//! this file is like the app.js file 
// overall reduxer store 
import { combineReducers } from "redux";
import userReducer from './user/user.reducer';

export default combineReducers({
    user :userReducer
})