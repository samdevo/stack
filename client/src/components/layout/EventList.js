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


class EventList extends React.Component {
	
	constructor(props) {
     super(props);
     this.zip = props.match.params.zip;
     console.log("zip IS " + this.zip);
     Geocode.setApiKey("AIzaSyC_Y5qgyLmYzkkFlRTKdnbrYJ0xZskUw54");
     this.state = {
        events: { 
          data: { 
          	empty: true
          }
        }
      } 
   }
   componentDidMount(){
     this.props.getEvents({zip: this.zip}).then(events => {
     	console.log("EVENT 0 ");
     	console.log(events.data[0]._id);
     	events.data.empty = false;
     	this.setState({events: events});
     });
   }

   render() {
   		
   		if (this.state.events.data.empty) {
   			return(<div>Loading events</div>);
   		}
   		else {
   			const eventCards = this.state.events.data.map((event, key) =>
       			<Card bg = "light">
					<Card.Title>
						{event.name}
			 		</Card.Title>
			 		<Card.Subtitle>
						{ formatDate(event.eventDate) } at { formatTime(event.eventDate) }
	 				</Card.Subtitle>
		 			<Card.Body>
						<Card.Text>
			 				{event.description}
		 				</Card.Text>
		 				<Button variant = "primary" href = {'/detail/' + event._id} >
							More Info
		 				</Button>
	 				</Card.Body>
 				</Card>
 			);

   			return (
				<div id = "grad">
      				<div id="bg-image"></div>
    	  			<Container>
						<Row>
							<Col>
								<h1>Events near {this.zip}</h1>
							
								{eventCards}
						
							</Col>
						</Row>				
					</Container>
				</div>
			);
		} // !empty
	} 
}

const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getEvents }
)(EventList);



function formatDate(d) { 
	var date = d.split('T').shift().split('-').reverse();
    var temp = date[0]; // reverse to mm/dd
    date[0] = date[1];
    date[1] = temp;                     
    date = date.join('/');  // join with "/"      -> "09/11/2015"
    return(date);
}

function formatTime(t) { 
	var time = t.split('T').pop().split(':'); // split on the "T"   -> ["2015-11-09", "10:..."]
    if (time[0] > 12) {
        time[0] = time[0] - 12;
        time = time.join(':') + " PM";
    }
    else {
        time = time.join(':') + " AM";
    }
    return(time);
}

// ReactDOM.render(
// 	 	<Display events={events}/>
// 	 	, document.getElementById('root'));
