import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";

export const createEvent = eventData => dispatch => {
  console.log("creating event...")
  console.log(eventData)
  axios
    .post("http://localhost:5000/api/events/create", eventData)
    .then(res => {
      console.log(res)
      return res
    }) // re-direct to login on successful register
    .catch(err =>{
      // console.log(err.response.data)
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    }
    );
}
// export default createEvent

// export const getEvents = reqData => dispatch => {
// 	console.log("getting events...")
// 	axios
// 		.post("http://localhost:5000/api/events/getEvents", reqData)
// 		.then(res => {
// 			console.log(res)
// 			return res
// 		})
// 		.catch(err => {dispatch({
// 			type: GET_ERRORS,
// 			payload: err.response.data
// 		})})



// }

export const getEvent = objectID => dispatch => {
  return new Promise(function(resolve, reject){
    axios
    .post("http://localhost:5000/api/events/getEvent", objectID)
    .then(res => {
      console.log(res)
      resolve(res)
    })
  })
}
export const getEvents = reqData => dispatch => {
	return new Promise(function(resolve, reject){
		axios
		.post("http://localhost:5000/api/events/getEvents", reqData)
		.then(res => {
			console.log(res)
			resolve(res)
		})
	})
	
}

export default getEvents