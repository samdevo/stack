import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames"

import {getEvents} from "../../actions/eventActions";
import pic from './elders.jpg';
import "./home.css";


class Landing extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {value: ''};
  	}

  	handleChange(event) {
    	this.setState({value: event.target.value});
  	}
	render(){
		return(
			<div id = "grad">
				<div id="bg-image"></div>
				<Container>

				  <Row>
				    <Col id = "slogan"><h1>Meet</h1>
		          <h1>Explore</h1>
		          <h1>Discover</h1>
		          <form action="/EventList">
		            <label>
		              Enter Your Zipcode: </label>  <br/>
		              <input type="zipcode" name="name" /> <br/>
		     

		            <input type="submit" value="Submit" onChange={this.handleChange}/>
		          </form>
					</Col>
				    <Col><img  src={pic} id = "elderly" alt="Picture of Elderly People" /></Col>
				  </Row>

				</Container>
				

			</div>

		
)}

}
	// class Register extends Component {
	//   constructor() {
	//     super();
	//     this.state = {
	//       name: "",
	//       email: "",
	//       password: "",
	//       password2: "",
	//       errors: {}
	//     };
	//   }
	//   componentDidMount() {
	//     // If logged in and user navigates to Register page, should redirect them to dashboard
	//     if (this.props.auth.isAuthenticated) {
	//       this.props.history.push("/dashboard");
	//     }
	//   }
	//   componentWillReceiveProps(nextProps) {
	//     if (nextProps.errors) {
	//       this.setState({
	//         errors: nextProps.errors
	//       });
	//     }
	//   }
	//   onChange = e => {
	//       this.setState({ [e.target.id]: e.target.value });
	//     };
	//   onSubmit = e => {
	//       e.preventDefault();
	//   const newUser = {
	//         name: this.state.name,
	//         email: this.state.email,
	//         password: this.state.password,
	//         password2: this.state.password2
	//       };
	//   console.log(newUser);
	//   this.props.registerUser(newUser, this.props.history);
	//     };
	// render() {
	//     const { errors } = this.state;




Landing.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, getEvents }
)(Landing);