const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema

const pointSchema = new mongoose.Schema({
  coordinates: [],
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
  attendees: [mongoose.Schema.Types.ObjectId],
  queryLoc: {
   type: { type: String },
   coordinates: []
  }
});

EventSchema.index({queryLoc:"2dsphere"});

var Event = mongoose.model("events", EventSchema);



module.exports = Event
