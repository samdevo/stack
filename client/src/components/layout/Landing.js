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
	    this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

  handleSubmit(event) {
    // validate zip here
    //event.preventDefault();
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
			

			<form action={`/list/${this.state.value}`} method="get" onSubmit={this.handleSubmit}>

			<label id = "enterzip">enter your zipcode: </label>  <br/>
			<input id = "zip" value={this.state.value} onChange={this.handleChange} type="zipcode" /> <br/>
			<input id = "submitbutton" type="submit" value="Submit" />
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