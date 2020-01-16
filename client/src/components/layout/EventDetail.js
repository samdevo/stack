import React from 'react';
import Helmet from "react-helmet"; // head tag maker - npm install --save react-helmet
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


class EventInfo extends React.Component {
  render() {
    const name = this.props.name;
    const description = this.props.description;
    const image = this.props.image;
    const location = this.props.location;
    const eventDate = this.props.eventDate;

    return (
      <Container>
        <Row> 
          <Col align="center">
            <h1>{name}</h1>
          </Col>
        </Row>
        <Row>
          <Col align="center">
            <img fluid className="image"  src={process.env.PUBLIC_URL + "/" + image.url} alt={image.altText} />
          </Col>
        </Row>
        <Row>
          <Col align="center"> 
            <h4>{description}</h4>
            <h4>Where: {location.street}</h4>
            <h4>When: {eventDate} </h4>
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
              <Card.Title>{attendees[0]}</Card.Title>
            </Card.Body>
          </Card>
        <Card style={{ width: '5rem' }}>
            <Card.Body>
              <Card.Title>{attendees[1]}</Card.Title>
            </Card.Body>
          </Card>
          <Card style={{ width: '5rem' }}>
           <Card.Body>
              <Card.Title>{attendees[2]}</Card.Title>
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
    const location = this.props.location; // map should be dynamic based on this location
    
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
                name={this.props.event.name} 
                location={this.props.event.location}
                eventDate={this.props.event.eventDate}
                description={this.props.event.description}
                image={this.props.event.image}
              />
          </Col>

           <Col>
              <EventMap location={this.props.event.location} />
          </Col>
          
         </Row>
         <Row> 
          
          <Col>
              <EventAttendees attendees={this.props.event.attendees} />
              <br />
          </Col>
         
         </Row>
            
      </Container>

    ); 
  }
}    

const EVENT = {
  name: 'Bowling in Brooklyn', 
  owner: 1,
  location: {
    type: 'Point',
    coordinates: [123,456],
    name: 'Bowl-Mor',
    street: '22 Cheever Pl',
    city: 'Brooklyn',
    state: 'NY',
    zip: '10211'
  },
  description: 'Outdoor bowling across Brooklyn. Bring shoes. Friendly atmosphere, non-competitive. No experience necessary.',
  eventDate: '2020/03/29T15:00:00', 
  createdDate: '2020/02/14T11:20:00',
  image: {
    url: 'images/bowl3.jpg',
    altText: 'Bowling'
  },
  attendees: [1,2,3,4,5]
};


export {EventDetail, EVENT};















