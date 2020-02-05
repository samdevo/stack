const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const latlng = new mongoose.Schema({
  lat:{
    type: Number
  },
  lng:{
    type: Number
  }
})
const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point']
  },
  coordinates: latlng,
  name: {
    type: String
  },
  street: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: String
  },
  placeId: {
    type: String
  },
  address: {
    type: String
  }
});

 


const EventSchema = new Schema({
  name: String,
  owner: mongoose.Schema.Types.ObjectId,
  location: pointSchema,
  description: String,
  eventDate: String,
  createdDate: Date,
  image: {
    url: String,
    altText: String
  },
  attendees: [mongoose.Schema.Types.ObjectId]
});


module.exports = Event = mongoose.model("events", EventSchema);
