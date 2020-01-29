import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createEvent, getEvents } from "../../actions/eventActions";
import { Container, Row, Col, Card, CardGroup, Button} from 'react-bootstrap';

const events = [
['Lunch',
'Going to get lunch',
'Jan. 15, 2020 at 12:00'],
["Book club" ,
"Reading at a book club",
"2:00"],["Book club" ,
"Reading at a book club",
"2:00"]]



class EventsList extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      name: "",
	      email: "",
	      password: "",
	      password2: "",
	      errors: {}
	    };
	    this.events = []
	    this.eventListing = []
	  }
	  componentDidMount() {
	  	this.props.getEvents().then((events) => {
	    	console.log(events)
	    	this.events = events
	    	
	    })
	  }


}
// EventsList.propTypes = {
//   logoutUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired
// };
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getEvents }
)(EventsList);