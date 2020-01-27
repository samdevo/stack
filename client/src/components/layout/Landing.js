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
import "./EventList.js";



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
			<Col id = "slogan">
			<h1>Meet</h1>
			<h1>Explore</h1>
			<h1>Discover</h1>
			<form action="/list">
			<label>
			Enter Your Zipcode: </label>  <br/>
			<input type="zipcode" name="name" /> <br/>
			<input type="submit" value="Submit" onChange={this.handleChange}/>
			<form action="/eventlist">
			<label id = "enterzip">enter your zipcode: </label>  <br/>
			<input id = "zip" type="zipcode" name="zip"/> <br/>
			<input id = "submitbutton" type="submit" value="Submit" onChange={this.handleChange}/>
			</form>
			</Col>
			<Col><img  src={pic} id = "mainpic" alt="Older adults enjoying time together." /></Col>
			</Row>
			</Container>
			</div>
			)}
	}

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