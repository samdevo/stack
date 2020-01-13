import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames"
import {getEvents} from "../../actions/eventActions"

class Landing extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      name: "",
	      email: "",
	      password: "",
	      password2: "",
	      errors: {}
	    };
	    this.events = []
	  }
	  componentDidMount() {
	    // If logged in and user navigates to Register page, should redirect them to dashboard
	    // if (this.props.auth.isAuthenticated) {
	    //   this.props.history.push("/dashboard");
	    // }
	    this.props.getEvents().then((events) => {
	    	console.log(events)
	    	this.events = events
	    })

	  }
	  

	render() {
		const { errors } = this.state
		return(
			<Container>
			  <Row class='row' className="justify-content-md-center border">
			    <Col class='border' xs lg="2">
			      1 of 3
			    </Col>
			    <Col class='border' md="auto">Variable width content</Col>
			    <Col class='border' xs lg="2">
			      3 of 3
			    </Col>
			  </Row>
			  <Row class='row' className="border">
			    <Col class='border'>1 of 3</Col>
			    <Col class='border' md="auto">Variable width content</Col>
			    <Col class='border' xs lg="2">
			      3 of 3
			    </Col>
			  </Row>

		<Row>
			<Col className="[ col-xs-12 col-sm-offset-2 col-sm-8 ]">
				<ul class="event-list">
					<li>
						<time datetime="2014-07-20">
							<span class="day">4</span>
							<span class="month">Jul</span>
							<span class="year">2014</span>
							<span class="time">ALL DAY</span>
						</time>
						<img alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" />
						<div class="info">
							<h2 class="title">Independence Day</h2>
							<p class="desc">United States Holiday</p>
						</div>
					</li>

					
					
				</ul>
			</Col>
		</Row>
		<Row>
			<Col>
				<ul class="event-list">
					<li>
						<time datetime="2014-07-20">
							<span class="day">4</span>
							<span class="month">Jul</span>
							<span class="year">2014</span>
							<span class="time">ALL DAY</span>
						</time>
						<img alt="Independence Day" src="https://farm4.staticflickr.com/3100/2693171833_3545fb852c_q.jpg" />
						<div class="info">
							<h2 class="title">Independence Day</h2>
							<p class="desc">United States Holiday</p>
						</div>
					</li>

					
					
				</ul>
			</Col>
		</Row>

			</Container>
			)
	}






}
	// class Register extends Component {
	//   constructor() {
	//     super();
	//     this.state = {
	//       name: "",
	//       email: "",
	//       password: "",
	//       password2: "",
	//       errors: {}
	//     };
	//   }
	//   componentDidMount() {
	//     // If logged in and user navigates to Register page, should redirect them to dashboard
	//     if (this.props.auth.isAuthenticated) {
	//       this.props.history.push("/dashboard");
	//     }
	//   }
	//   componentWillReceiveProps(nextProps) {
	//     if (nextProps.errors) {
	//       this.setState({
	//         errors: nextProps.errors
	//       });
	//     }
	//   }
	//   onChange = e => {
	//       this.setState({ [e.target.id]: e.target.value });
	//     };
	//   onSubmit = e => {
	//       e.preventDefault();
	//   const newUser = {
	//         name: this.state.name,
	//         email: this.state.email,
	//         password: this.state.password,
	//         password2: this.state.password2
	//       };
	//   console.log(newUser);
	//   this.props.registerUser(newUser, this.props.history);
	//     };
	// render() {
	//     const { errors } = this.state;




Landing.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser, getEvents }
)(Landing);