const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point']
  },
  coordinates: {
    type: [Number]
  },
  name: {
    type: String
  }
  address: {
    type: String
  }
});

const EventSchema = new Schema({
  name: String,
  owner: String,
  location: pointSchema,
  description: String,
  eventDate: Date,
  createdDate: Date,
  attendees: [mongoose.Schema.Types.ObjectId]
});
module.exports = Event = mongoose.model("events", EventSchema);