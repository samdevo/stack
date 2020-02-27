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


class HelpMeGetThere extends React.Component {
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
            Curb API call for {this.state.e.location.address} <br />
            lat {this.state.e.location.coordinates[0]} <br />
            long {this.state.e.location.coordinates[1]}
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
)(HelpMeGetThere);












