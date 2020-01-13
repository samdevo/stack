//CODE FOR THE NAVBAR
//think this is pretty self-explanatory
import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import {Navbar, Form, Button, FormControl, Nav} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginPopup from "../auth/LoginPopup.js"
class Navigation extends React.Component {
  constructor(){
    super()
    this.state = {showPopup: false}
  }
  // togglePopup() {  
  //   this.setState({  
  //        showPopup: !this.state.showPopup  
  //   });  
  // }  
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  render(){
    
    let links1;
    let links2
    //SHOW "LOGOUT" BUTTON IF LOGGED IN, otherwise show login and signup buttons (no current user)
      if(this.props.auth.isAuthenticated){
        links2 = 
          <Button className="justify-content-end" style={{marginRight: '10px'}} onClick={this.onLogoutClick}>Logout</Button>
          links1 = <Navbar.Text style={{marginRight: '20px'}}>
      Signed in as: <b>{this.props.auth.user.name}</b>
    </Navbar.Text>
        
      }
      else{
        links1 = 
          <Button className="justify-content-end"style={{marginRight: '10px'}} href={"/login"}>Login</Button>
          
        links2 = 
          <Button className="justify-content-end"style={{marginRight: '10px'}} href="/register">Signup</Button>
        

      }
      console.log(this.props.auth.user.name)
    
  	return (
    //<nav>
       //   <ul>
       //     <li>
       //       <a href="/">Home</a>
       //     </li>
       //     <li>
        //      <a href="/about">About</a>
        //    </li>
        //    <li>
         //     <a href="/hi">Hello</a>
        // //   </li>
        //  </ul>
       // </nav>
   <div>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Navbar.Brand href="/">SeniorEvents</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
    {links1}{links2}
  </Navbar.Collapse>

</Navbar>
   </div>
  );
  }
}

Navigation.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Navigation);
{/*<Navbar bg="light" expand="lg">
        <Navbar.Brand href='/'>SeniorEvents</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            {links}

          
          
        </Navbar.Collapse>


    </Navbar>*/}