import React from 'react';
import Helmet from "react-helmet"; // head tag maker - npm install --save react-helmet
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { connect } from "react-redux";

const event = {
  id: 1,
  title: 'Bowling in Brooklyn', 
  address: 'Bowl-Mor, 22 Cheever Pl, Brooklyn, NY', 
  date: '1/17/2020', 
  time: '5:00 PM',
  desc: 'Outdoor bowling across Brooklyn. Bring shoes. Friendly atmosphere, non-competitive. No experience necessary.',
  imageURL: 'images/bowl3.jpg',
  imageAltText: 'Bowling',
  attendees: [1,2,3]
};

const attendees = [
  {id: 1, name: 'Tonya P.', imageURL: 'images/1_tonya.jpg'},
  {id: 2, name: 'Tony W.', imageURL: 'images/2_tony.jpg'},
  {id: 3, name: 'Tino R.', imageURL: 'images/3_tino.jpg'},
  {id: 4, name: 'Kira W.', imageURL: 'images/2_tony.jpg'},
  {id: 5, name: 'Leo R.', imageURL: 'images/3_tino.jpg'}
];

class EventInfo extends React.Component {

  render() {
    console.log(this.props)
    const title = this.props.title;
    const desc = this.props.desc;
    const imageURL = this.props.imageURL;
    const imageAltText = this.props.imageAltText;
    const address = this.props.address;
    const date = this.props.date;
    const time = this.props.time;

    return (
      <Container>
        <Row> 
          <Col align="center">
            <h1>{title}</h1>
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <img fluid className="image"  src={process.env.PUBLIC_URL + "/" + imageURL} alt={imageAltText} />
          </Col>
        </Row>
        <Row>
          <Col align="center"> 
            <h4>{desc}</h4>
            <h4>Where: {address}</h4>
            <h4>When: {date} at {time}</h4>
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
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/" + attendees[0].imageURL} />
            <Card.Body>
              <Card.Title>{attendees[0].name}</Card.Title>
            </Card.Body>
          </Card>
        <Card style={{ width: '5rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/" + attendees[1].imageURL} />
            <Card.Body>
              <Card.Title>{attendees[1].name}</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '5rem' }}>
            <Card.Img variant="top" src={process.env.PUBLIC_URL + "/" + attendees[2].imageURL} />
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
    const address = event.address; // map should be dynamic based on this address
    
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
  render() {
    return (  
      <Container>
        <Helmet>
          <title>Senior Events</title>
          <meta name="keywords" content="senior events" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Helmet>
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
             <EventInfo 
                title={event.title} 
                address={event.address}
                date={event.date}
                time={event.time}
                desc={event.desc}
                imageAltText={event.imageAltText}
                imageURL={event.imageURL}
              />
          </Col>

           <Col>
              <EventMap address={event.address} />
          </Col>
          
         </Row>
         <Row> 
          
          <Col>
              <EventAttendees attendees={attendees} />
              <br />
          </Col>
         
         </Row>
            
      </Container>

    ); 
  }
}    



const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  {  }
)(EventDetail);















