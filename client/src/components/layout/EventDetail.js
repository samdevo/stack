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

        <Row>
          <Col align="center"> 
            <Button variant="flat" size="xxl">
              Sign up!
            </Button>
          </Col>
        </Row>

        <Row>
          <Col> 
            &nbsp;           
          </Col>
        </Row>
       
      </Container>  
      
    )
  }
}


class EventAttendees extends React.Component {
  render() {
    const attendees = this.props.attendees;

    return (
      <Container>
      <Row>
        <Col align="center">
          <h1>Who's Coming?</h1>
        </Col>
      </Row>  
            
      <Row>  
        <Col></Col>
        <Col xs={9}>
          <CardGroup>
          <Card style={{ width: '5rem' }}> 
            <Card.Body>
              <Card.Title>{attendees[0].name}</Card.Title>
            </Card.Body>
          </Card>
        <Card style={{ width: '5rem' }}>
           <Card.Body>
              <Card.Title>{attendees[1].name}</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '5rem' }}>
            <Card.Body>
              <Card.Title>{attendees[2].name}</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '5rem' }}>
            <Card.Body>
              <Card.Title><a href="">+ {attendees.length -3} more</a></Card.Title>
            </Card.Body>
          </Card>
          </CardGroup>
        </Col> 
        <Col></Col> 
      </Row> 

      <Row>
        <Col align="center">
          <p>
          <br />
          <Button variant="flat" size="xxl">
            Invite Friends
          </Button>
          </p>
        </Col>
      </Row>    
      </Container>
    );
  }
}


class EventMap extends React.Component {
  render() {
    //const myevent = this.props.myevent; // map should be dynamic based on this address
    
    return (
      <Container>
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
        <Col align="center">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.437469438017!2d-74.00168994903454!3d40.6863619792331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a5b7205d579%3A0xba781618256b732b!2s22%20Cheever%20Pl%2C%20Brooklyn%2C%20NY%2011231!5e0!3m2!1sen!2sus!4v1578168425495!5m2!1sen!2sus" frameborder="0"  allowfullscreen=""></iframe>
        </Col>
      </Row>
      <Row>
        <Col align="center">
          <br />
            <Button variant="flat" size="xxl">
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
     // USE ID "5e3af2a6db2d474bee3e535a"
   }
   componentDidMount(){
    var myevent;
    this.props.getEvent({id: this.id}).then(myevent => {
        console.log("getevent");
        var date = myevent.data.event.eventDate.split('T').shift().split('-').reverse();
        var temp = date[0]; // reverse to mm/dd
        date[0] = date[1];
        date[1] = temp;                     
        date = date.join('/');  // join with "/"      -> "09/11/2015"
        var time = myevent.data.event.eventDate.split('T').pop().split(':'); // split on the "T"   -> ["2015-11-09", "10:..."]
        if (time[0] > 12) {
          time[0] = time[0] - 12;
          time = time.join(':') + " PM";
        }
        else {
          time = time.join(':') + " AM";
        }
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
              <EventMap  />
          </Col>
          
         </Row>
         <Row> 
          
          <Col>
              <EventAttendees attendees={attendees} />
              <br />
          </Col>
         
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

/*

            */













