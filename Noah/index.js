//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
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

class Display extends React.Component {
	array = (i) => {
		const events = this.props.events;
		//for (let i = 0; i < events.length; i++){
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

		 			<Button variant = "primary">
		 				More info
	 				</Button>
	 			</Card.Body>
 			</Card>
		)
		//}
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

ReactDOM.render(
	 	<Display events={events}/>
	 	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
