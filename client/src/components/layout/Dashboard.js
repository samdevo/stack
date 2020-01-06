import React from 'react';
// import logo from './logo.svg';
import '../../App.css';
import {Container, Row, Col} from 'react-bootstrap'
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import { createEvent, getEvents } from "../../actions/eventActions";

class Dashboard extends React.Component {
	constructor() {
	    super();
	    this.state = {
	      name: "",
	      activity: "",
	      errors: {}
	    };
	  }
	  componentDidMount() {
	    // If logged in and user navigates to Register page, should redirect them to dashboard
	    if (!this.props.auth.isAuthenticated) {
	      this.props.history.push("/");
	    }
	    this.props.getEvents().then( res => {console.log(res)})
	  }
	  componentWillReceiveProps(nextProps) {
	    if (nextProps.errors) {
	      this.setState({
	        errors: nextProps.errors
	      });
	    }
	  }
	  onChange = e => {
	      this.setState({ [e.target.id]: e.target.value });
	    };
	  onSubmit = e => {
	      e.preventDefault();
	  const newEvent = {
	        name: this.state.name,
	        activity: this.state.activity

	      };
	      this.render()
	  newEvent.createdDate = Date.now()
	  newEvent.owner = this.props.auth.user.email
	  this.props.createEvent(newEvent)
	    };

	render() {
		console.log(this.state)
		const { errors } = this.state
		console.log("errors:")
		console.log(errors)
		return(
			<Container>
			  
		<Row>
			<Col>
				<ul class="event-list">
					<li>
						<time dateTime="2014-07-20">
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

		<form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.eventName}
                  id="name"
                  type="text" className={classnames("", {
                    invalid: errors.eventName
                  })}
                />
                <label htmlFor="name">Event Name</label>
                <span className="red-text">
                  {errors.eventName}
                </span>

                <span className="red-text">{errors.name}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.activity}
                  error={errors.activity}
                  id="activity"
                  type="text" className={classnames("", {
                    invalid: errors.activity
                  })}
                />
                <label htmlFor="email">Activity</label>
                <span className="red-text">{errors.activity}</span>
              </div>
              
          
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Create Event
                </button>
              </div>
            </form>
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


// function eventList(){
// 	console.log("eventlist")
// 	getEvents().then(res => {console.log(res)})
// }



Dashboard.propTypes = {
  createEvent: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { createEvent, getEvents }
)(Dashboard);