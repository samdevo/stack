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
  },
<<<<<<< HEAD
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
=======
  address: {
>>>>>>> 89e2b3bb808b13b593afad633d967aac57891c2b
    type: String
  }
});


const EventSchema = new Schema({
  name: String,
  owner: mongoose.Schema.Types.ObjectId,
  location: pointSchema,
  description: String,
  eventDate: Date,
  createdDate: Date,
  image: {
    url: String,
    altText: String
  },
  attendees: [mongoose.Schema.Types.ObjectId]
});


module.exports = Event = mongoose.model("events", EventSchema);
