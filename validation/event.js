const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateLoginInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
//   data.email = !isEmpty(data.email) ? data.email : "";
//   data.password = !isEmpty(data.password) ? data.password : "";
//   data.email = !isEmpty(data.email) ? data.email : "";
//   data.password = !isEmpty(data.password) ? data.password : "";
// // Email checks
//   if (Validator.isEmpty(data.email)) {
//     errors.email = "Email field is required";
//   } else if (!Validator.isEmail(data.email)) {
//     errors.email = "Email is invalid";
//   }
// // Password checks
//   if (Validator.isEmpty(data.password)) {
//     errors.password = "Password field is required";
//   }
	// errors.eventName = "name too short"
return {
    errors,
    isValid: isEmpty(errors)
  };
};

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// // Create Schema
// const EventSchema = new Schema({
//   name: String
//   owner: mongoose.Schema.Types.ObjectId,
//   location: {
//     address: {
//         street: String,
//         city: String,
//         state: String
//         zip: Number
//     },
//     name: String
//   },
//   activity: String,
//   eventDate: Date,
//   createdDate: Date
// });
// module.exports = Event = mongoose.model("events", UserSchema);