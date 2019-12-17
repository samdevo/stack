const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const EventSchema = new Schema({
  name: String,
  owner: String,
  location: {
    address: {
        street: String,
        city: String,
        state: String,
        zip: Number
    },
    name: String
  },
  activity: String,
  eventDate: Date,
  createdDate: Date
});
module.exports = Event = mongoose.model("events", EventSchema);