import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createEvent, getEvents } from "../../actions/eventActions";
import Script from 'react-load-script';
import Autocomplete from 'react-google-autocomplete';
// var autocomplete;

class CreateEvent extends React.Component {
	constructor() {
	    super();
	    //set new event input to empty (to keep track of form)
	    this.state = {
	      name: "",
	      description: "",
	      location: {},
	      eventDate: "",
	      errors: {},
        img: null
	    };
      this.location = {}
      // this.autocomplete = null
	    // this.autocomplete;
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
      e.preventDefault()
      if(e.target.id == "img"){
        this.setState({"img": e.target.files[0]})
      }
	  	else if(e != "location"){
	      this.setState({ [e.target.id]: e.target.value });
	  	}
      console.log(this.state)
	    };

	  onSubmit = e => {//user wants to create new event
      const data = new FormData()
      data.append('img', this.state.img)
      var comps = this.location.address_components
      for (var i = 0; i < comps.length; i++){
        var val = comps[i]
        if(val.types[0] == "postal_code"){

          this.location.zip = val.long_name
        }
      }
	  	var name = document.getElementById("name").value
      console.log(name)
	  	var description = document.getElementById("description").value
	  	var loc = {
        name: this.location.name,
        address: this.location.formatted_address,
        coordinates: [this.location.geometry.location.lng(), this.location.geometry.location.lat()],
        zip: this.location.zip,
        placeId: this.location.place_id,
        type: "Point"


      }
      console.log(loc)
	  	// var date = document.getElementById("date").value
	      // e.preventDefault();
	  const newEvent = {
	        name: this.state.name,
	        description: this.state.description,
	        location: loc,
	        eventDate: this.state.eventDate,
	        createdDate: Date.now(),
	        owner: this.props.auth.user.id,
          img: this.state.img

	      };
        data.append("body", newEvent)
        // console.log(newEvent)
        // data.append("body", newEvent)
        // console.log(data)
        // console.log(newEvent)
	  //SEND REQUEST to be handled within eventActions.js
	  this.props.createEvent(data).then(res => {
      console.log(res)
    })
	    };
	// handleScriptLoad(){
	// 	// Declare Options For Autocomplete 
	// 	  const options = { types: ['(cities)'] }; 
		  
	// 	  // Initialize Google Autocomplete 
	// 	  /*global google*/
	// 	  this.autocomplete = new google.maps.places.Autocomplete(
	// 	                        document.getElementById('location'),
	// 	                        options );
	// 	  // Avoid paying for data that you don't need by restricting the 
	// 	  // set of place fields that are returned to just the address
	// 	  // components and formatted address
	// 	  this.autocomplete.setFields(['address_components',   
	// 	                               'formatted_address']);
	// 	  // Fire Event when a suggested name is selected
	// 	  this.autocomplete.addListener('place_changed',
	// 	                                this.handlePlaceSelect); 
	// }
	// handlePlaceSelect () {
	// 	console.log("selected")

 //    // Extract City From Address Object
 //    const addressObject = this.autocomplete.getPlace();
 //    console.log("got place")
 //    console.log(addressObject)
 //    const address = addressObject.address_components;

 //    // Check if address is valid
 //    if (address) {
 //      // Set State
 //      console.log({
 //          city: address[0].long_name,
 //          query: addressObject.formatted_address,
 //        }
 //      );
 //    }
 //  }
// <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_Y5qgyLmYzkkFlRTKdnbrYJ0xZskUw54&libraries=places"       
    //   onLoad={this.handleScriptLoad}        
    // />        
	render() {
		console.log(this.state)
		const { errors } = this.state
		// console.log("errors:")
		// console.log(errors)
		// console.log(this.props.auth)
		return(
			<div>
			
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
                <Autocomplete id="location"
    onPlaceSelected={(place) => {
      this.location = place
      this.location.name = document.getElementById("location").value.split(",")[0]
      console.log(this.location)
    }}
    types={[]}
    componentRestrictions={{country: "us"}}
/>
                <label htmlFor="email">Location name</label>
                <span className="red-text">{errors.activity}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  id="eventDate"
                  type="datetime-local" className={classnames("", {
                    invalid: errors.activity
                  })}
                />
                <label htmlFor="email">Event date</label>
                <span className="red-text">{errors.activity}</span>
              </div>
              <div className="input-field col s12">
              <input onChange={this.onChange} id="img" type="file"/>



              </div>


              
          
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                
              </div>
              <button onClick={this.onSubmit}>
                  Create Event
                </button>

            </div>
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