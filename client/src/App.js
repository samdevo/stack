import React from 'react';
import Login from './components/auth/Login'
import LoginPopup from './components/auth/LoginPopup'
import Register from './components/auth/Register'
import Navigation from './components/layout/Navigation'
import Landing from './components/layout/Landing.js'
import Dashboard from './components/layout/Dashboard.js'
import EventDetail from './components/layout/EventDetail.js'
import EventList from './components/layout/EventList.js'

import { Provider } from "react-redux";
import store from "./store";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
// import {Display} from "./components/layout/EventList.js"



// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}


class App extends React.Component {
	constructor() {
		super()
	    this.state = {
	      isAuthed: false //to change
	    };
  	}
    render(){
      //simple routing - renders different components based on URL route
      return(
        <Provider store={store}>
         <Router>
        <div className="App">
          <Navigation />
          <Route exact path="/" component={Landing} />
          <Route path='/dashboard' component={Dashboard}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/nearby" component={Login} />
          <Route exact path="/detail" component={EventDetail} />
        </div>
      </Router>
      </Provider>
      )
    }
}



function GreyScreen(){
  return(<div style={{position: "fixed", /* above everything else */
            top:0, left:0, bottom:0, right:0,
            background:"rgba(0,0,0,.5)"}} zindex={100}></div>)
}
export default App;
