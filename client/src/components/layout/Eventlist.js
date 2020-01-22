import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createEvent, getEvents } from "../../actions/eventActions";
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
// import * as serviceWorker from './serviceWorker';
// import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
// import Button from 'react-bootstrap/Button';
//[ event name , event owner , event date , activity type , location ]

const events = [
['Lunch',
'Going to get lunch',
'Jan. 15, 2020 at 12:00'],
["Book club" ,
"Reading at a book club",
"2:00"],["Book club" ,
"Reading at a book club",
"2:00"]]

class EventList extends React.Component {
	array = (i) => {
		const events = this.props.events;
		return(
			<Card bg = "light">
				<Card.Title>
			 		{events[i][0]}
		 		</Card.Title>
		 		<Card.Subtitle>
		 			{events[i][2]}
	 			</Card.Subtitle>
		 		<Card.Body>
		 			<Card.Text>
		 				{events[i][1]}
		 			</Card.Text>
		 			<Button variant = "primary" to = "/app">
		 				More info
	 				</Button>
	 			</Card.Body>
 			</Card>
		)
	}
	render() {
		//const events = this.props.events;
		return(
			<Container>
				<Row>
					<Col>
						{this.array(0)}
					</Col>
				</Row>
				<Row>
					<Col>
						{this.array(1)}
					</Col>
				</Row>
				<Row>
					<Col>
						{this.array(2)}
					</Col>
				</Row>
			</Container>
		)	 
	}
}

// ReactDOM.render(
// 	 	<Display events={events}/>
// 	 	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

export default connect(

)(EventList);