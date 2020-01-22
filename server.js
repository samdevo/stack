const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path")

const passport = require("passport");
const users = require("./routes/api/users");
const events = require("./routes/api/events")
const cors = require("cors")


const app = express();
app.use(cors())
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURI;

console.log("connecting to DB")
// Connect to MongoDB
mongoose
  .connect(
    db,
    {useUnifiedTopology: true, useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes
app.use("/api/users", users);
app.use("/api/events", events)

//serve static assets

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}



const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`We up and running on port ${port} !`));