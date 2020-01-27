import React from 'react';
import '../../App.css';
import {Container, Row, Col, Card, Button} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createEvent, getEvents } from "../../actions/eventActions";
import ReactDOM from 'react-dom';

const Events = [
  {id: 1,
  title: 'Bowling in Brooklyn', 
  address: 'Bowl-Mor, 22 Cheever Pl, Brooklyn, NY', 
  date: '1/17/2020', 
  time: '5:00 PM',
  desc: 'Outdoor bowling across Brooklyn. Bring shoes. Friendly atmosphere, non-competitive. No experience necessary.',
  imageURL: 'images/bowl3.jpg',
  imageAltText: 'Bowling',
  attendees: [1,2,3]},
  {id: 2,
  title: 'Going to a book club',
  address: '150 East 86th St, New York, NY',
  date: '2/21/2020',
  time: "8:30 PM",
  desc: "We're going to a book club at Barnes & Noble to discuss a recent book.",
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
   }
   event = (i) => {
		return(
			<Card bg = "light">
				<Card.Title>
			 		{Events[i].title}
		 		</Card.Title>
		 		<Card.Subtitle>
		 			{Events[i].date + Events[i].time}
	 			</Card.Subtitle>
		 		<Card.Body>
		 			<Card.Text>
		 				{Events[i].desc}
		 			</Card.Text>
		 			<Button variant = "primary" href = {'./detail/' + Events[i].id}>
		 				More Info
	 				</Button>
	 			</Card.Body>
 			</Card>
		)
	}
	render() {
		return(
			<Container>
				<Row>
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
		)	 
	}
}

export default connect()(EventList);

// ReactDOM.render(
// 	 	<Display events={events}/>
// 	 	, document.getElementById('root'));
