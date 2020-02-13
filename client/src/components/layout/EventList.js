import React from 'react';
import '../../App.css';
import pic from './elders.jpg';
import "./home.css";
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createEvent, getEvents } from "../../actions/eventActions";
import ReactDOM from 'react-dom';
import Geocode from 'react-geocode'

const Events = [
  {id: "5e436388bbb8dc687df43ca3",
  title: 'Bowling in Brooklyn', 
  address: 'Bowl-Mor, 22 Cheever Pl, Brooklyn, NY', 
  date: '1/17/2020', 
  time: '5:00 PM',
  desc: 'Outdoor bowling across Brooklyn. Bring shoes. Friendly atmosphere, non-competitive. No experience necessary.',
  imageURL: 'images/bowl3.jpg',
  imageAltText: 'Bowling',
  attendees: [1,2,3]},
  {id: 2,
  title: 'Book club meeting',
  address: '150 East 86th St, New York, NY',
  date: '2/21/2020',
  time: "8:30 PM",
  desc: "We're going to a book club meeting at Barnes & Noble to discuss Peripheral by William Gibson.",
  imageURL: "./elders.jpg",
  imageAltText: "older adults",
  atendees: [1,4,5]},
];

const attendees = [
  {id: 1, name: 'Tonya P.', imageURL: 'images/1_tonya.jpg'},
  {id: 2, name: 'Tony W.', imageURL: 'images/2_tony.jpg'},
  {id: 3, name: 'Tino R.', imageURL: 'images/3_tino.jpg'},
  {id: 4, name: 'Kira W.', imageURL: 'images/2_tony.jpg'},
  {id: 5, name: 'Leo R.', imageURL: 'images/3_tino.jpg'}
];

//console.log("Hello")

class EventList extends React.Component {
	constructor(props) {
     super(props);
     this.zip = props.match.params.zip;
     console.log("zip IS " + this.zip);
     this.props.getEvents({zip: this.zip})
     Geocode.setApiKey("AIzaSyC_Y5qgyLmYzkkFlRTKdnbrYJ0xZskUw54");

     Geocode.fromAddress("Eiffel Tower").then(
  response => {
    const { lat, lng } = response.results[0].geometry.location;
    console.log(lat, lng);
  },
  error => {
    console.error(error);
  }
);
  // d
   }
   event = (i) => {
		return(
			<Card bg = "light">
				<Card.Title>
			 		{Events[i].title}
		 		</Card.Title>
		 		<Card.Subtitle>
		 			{Events[i].date + " at " + Events[i].time}
	 			</Card.Subtitle>
		 		<Card.Body>
		 			<Card.Text>
		 				{Events[i].desc}
		 			</Card.Text>
		 			<Button variant = "primary" href = {'/detail/' + Events[i].id}>
		 				More Info
	 				</Button>
	 			</Card.Body>
 			</Card>
		)
	}
	render() {
		return(
			<div id = "grad">
      		<div id="bg-image"></div>
      		<Container>
				<Row>
					<Col>
						<h1>Events near {this.zip}</h1>
					</Col>
				</Row><Row>
					<Col>
						{this.event(0)}
					</Col>
				</Row>
				<Row>
					<Col>
						{this.event(1)}
					</Col>
				</Row>
			</Container>
			</div>
		)	 
	}
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getEvents }
)(EventList)

// ReactDOM.render(
// 	 	<Display events={events}/>
// 	 	, document.getElementById('root'));
