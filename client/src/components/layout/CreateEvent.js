import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createEvent, getEvents } from "../../actions/eventActions";

class CreateEvent extends React.Component {
	constructor() {
	    super();
	    //set new event input to empty (to keep track of form)
	    this.state = {
	      name: "",
	      description: "",
	      location: {},
	      image: "",
	      eventDate: Date,
	      errors: {}
	    };
	  }
	  componentDidMount() {
	    // If not logged in, send user to landing page
	    if (!this.props.auth.isAuthenticated) {
	      this.props.history.push("/");
	    }
	    //get from server and handle promise (function handled in eventActions.js)
	    this.props.getEvents().then( res => {console.log(res)})
	  }
	  componentWillReceiveProps(nextProps) {
	    if (nextProps.errors) {
	      this.setState({
	        errors: nextProps.errors
	      });
	    }
	  }
	  onChange = e => { //update state on input change
	  	if(e != "location"){
	      this.setState({ [e.target.id]: e.target.value });
	  	}
	    };
	  onSubmit = e => {//user wants to create new event
	  	var name = document.getElementById("name").value
	  	var description = document.getElementById("description").value
	  	var loc = {name: document.getElementById("location").value}
	  	var date = document.getElementById("date").value
	      e.preventDefault();
	  const newEvent = {
	        name: name,
	        description: description,
	        location: loc,
	        eventDate: date,
	        createdDate: Date.now(),
	        owner: this.props.auth.user.id

	      };
	  //SEND REQUEST to be handled within eventActions.js
	  this.props.createEvent(newEvent)
	    };

	render() {
		console.log(this.state)
		const { errors } = this.state
		console.log("errors:")
		console.log(errors)
		console.log(this.props.auth)
		return(

		<form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.eventName}
                  id="name"
                  type="text" className={classnames("", {
                    invalid: errors.eventName
                  })}
                />
                <label htmlFor="name">Event Name</label>
                <span className="red-text">
                  {errors.eventName}
                </span>

                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.activity}
                  error={errors.activity}
                  id="description"
                  type="text" className={classnames("", {
                    invalid: errors.activity
                  })}
                />
                <label htmlFor="email">Description</label>
                <span className="red-text">{errors.activity}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.activity}
                  error={errors.activity}
                  id="location"
                  type="text" className={classnames("", {
                    invalid: errors.activity
                  })}
                />
                <label htmlFor="email">Location name</label>
                <span className="red-text">{errors.activity}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  id="date"
                  type="datetime-local" className={classnames("", {
                    invalid: errors.activity
                  })}
                />
                <label htmlFor="email">Event date</label>
                <span className="red-text">{errors.activity}</span>
              </div>

              
          
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Create Event
                </button>
              </div>
            </form>
            )
			
	}
}

/*
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema


const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point']
  },
  coordinates: {
    type: [Number]
  },
  name: {
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  }
});

 


const EventSchema = new Schema({
  name: String,
  owner: mongoose.Schema.Types.ObjectId,
  location: pointSchema,
  description: String,
  eventDate: Date,
  createdDate: Date,
  image: {
    url: String,
    altText: String
  },
  attendees: [mongoose.Schema.Types.ObjectId]
});


module.exports = Event = mongoose.model("events", EventSchema);

*/
CreateEvent.propTypes = {
  createEvent: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { createEvent, getEvents }
)(CreateEvent);