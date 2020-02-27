import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../../App.css';
import pic from './elders.jpg';
import "./home.css";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { connect } from "react-redux";
import { getEvent } from "../../actions/eventActions";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
/*
const event = {
  id: 1,
  title: 'Bowling in Brooklyn', 
  location: {
    type: 'point',
    address: '22 Cheever Pl',
    city: 'Brooklyn',
    state: 'NY',
    zip: '11211'
  }, 
  date: '1/17/2020', 
  time: '5:00 PM',
  desc: 'Outdoor bowling across Brooklyn. Bring shoes. Friendly atmosphere, non-competitive. No experience necessary.',
  imageURL: 'images/bowl3.jpg',
  imageAltText: 'Bowling',
  attendees: [1,2,3]
};
*/
const attendees = [
  {id: 1, name: 'Tonya P.'},
  {id: 2, name: 'Tony W.'},
  {id: 3, name: 'Tino R.'},
  {id: 4, name: 'Kira W.'},
  {id: 5, name: 'Leo R.'}
];

class EventInfo extends React.Component {

  render() {
    const e = this.props.e;
    console.log(e.name); 

    return (
      <Container> 
        <Row> 
          <Col align="center">
            <h1>{e.name}</h1>
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <img  src={process.env.PUBLIC_URL + "/" + e.eventimageURL} id = "mainpic" alt={e.imageAltText} />
          </Col>
        </Row>
        <Row>
          <Col align="center"> 
            <h4>{e.description}</h4>
            <h4>{e.location.address}</h4>
            <h4>{e.date} at {e.time}</h4>
          </Col>
        </Row> 
      </Container>        
    )
  }
}


// npm install --save react-google-maps

class EventMap extends React.Component {
  render() {
    const e = this.props.e; 
    const MyMapComponent = withScriptjs(withGoogleMap((props) =>
      <GoogleMap defaultZoom={12} defaultCenter={{ lat: e.location.coordinates[1], lng: e.location.coordinates[0] }} >
        {props.isMarkerShown && <Marker position={{ lat: e.location.coordinates[1], lng: e.location.coordinates[0] }} />}
      </GoogleMap>
    )) 
    return (
      <Container>
      <Row>
        <Col align="center">
          <MyMapComponent
            isMarkerShown 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC_Y5qgyLmYzkkFlRTKdnbrYJ0xZskUw54&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          /> 

           
            
  
        </Col>
      </Row>
      <Row>
        <Col align="center">
          <br />
            <Button variant = "flat"  size="xxl" href = {'/helpMeGetThere/' + e._id} > 
            Help me get there
          </Button>
        </Col>
      </Row>
     </Container>
    );
  }
}


class EventDetail extends React.Component {
  constructor(props) {
     super(props);
     this.id = props.match.params.id;
     console.log("id is " + this.id);
     this.state = {
        e: { empty: true,
          location: {
            address: ""
          },
          date:""
        }
      }
   }
   componentDidMount(){
    var myevent;
    this.props.getEvent({id: this.id}).then(myevent => {
        console.log("getevent");
        //var date = myevent.data.event.eventDate.split('T').shift().split('-').reverse();
        //var temp = date[0]; // reverse to mm/dd
        //date[0] = date[1];
        //date[1] = temp;                     
        //date = date.join('/');  // join with "/"      -> "09/11/2015"
        var date = formatDate(myevent);
        var time = formatTime(myevent);
        myevent.data.event.time = time;                      
        myevent.data.event.date = date;
        myevent.data.event.empty = false;
        this.setState({e: myevent.data.event});
      })
   }
   render() {
    
      
    if(!this.state.e.empty){
    return (  
      <div id = "grad">
      <div id="bg-image"></div>
      <Container>
    
        <style type="text/css">
        {`
          .btn-flat {
            background-color: purple;
            color: white;
        }

          .btn-xxl {
            padding: 1rem 1.5rem;
            font-size: 1.5rem;
          }
        `}
        </style>
        <Row>
          
          <Col>
             <EventInfo e={this.state.e} />
          </Col>

           <Col>
              <EventMap e={this.state.e}  />
          </Col>
          
         </Row>
         <Row> 
          
         
         
         </Row>
            
      </Container>
      </div>

    ); 
  }else{return(<h1> loading... </h1>)}
  }
}    



const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { getEvent }
)(EventDetail);

function formatDate(e) { 
  var date = e.data.event.eventDate.split('T').shift().split('-').reverse();
    var temp = date[0]; // reverse to mm/dd
    date[0] = date[1];
    date[1] = temp;                     
    date = date.join('/');  // join with "/"      -> "09/11/2015"
    return(date);
}

function formatTime(e) { 
  var time = e.data.event.eventDate.split('T').pop().split(':'); // split on the "T"   -> ["2015-11-09", "10:..."]
    if (time[0] > 12) {
        time[0] = time[0] - 12;
        time = time.join(':') + " PM";
    }
    else {
        time = time.join(':') + " AM";
    }
    return(time);
}/*
        <Row>
          <Col align="center"> 
            <Button variant="flat" size="xxl">
              Sign up!
            </Button>
          </Col>
        </Row>
            



      <Row>
        <Col align="center">
          <h1>&nbsp;</h1>
        </Col>
      </Row>
      <Row>
        <Col align="center">
          <h1>How do I get there?</h1>
        </Col>
      </Row>
      <Row>


          <Col>
              <EventAttendees attendees={attendees} />
              <br />
          </Col>
      */













