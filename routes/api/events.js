const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const fs = require('fs')
const neatCsv = require('neat-csv');
var imgPath = './bigseniors.jpeg';// Load input validation
const validateEventInput = require("../../validation/event");
// Load User model
const Event = require("../../models/Event");
// @route POST api/users/register
// @desc Register user
// @access Public
zips = {}
fs.readFile('./us-zip-code-latitude-and-longitude.csv', async (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  var d = await neatCsv(data)
  // console.log(d)
  // zips = {}
  for(var i = 0; i < d.length; i++){
    // console.log(d[i]['0'].split(';')[0])
    // console.log(d[i]['0'].split(';')[4])
    // console.log(d[i]['0'].split(';')[0].toString())
    zips[d[i]['0'].split(';')[0]] = [parseFloat(d[i]['0'].split(';')[4]), parseFloat(d[i]['0'].split(';')[3])]
    // console.log(zips)
  }
  console.log(zips['10471'])
  // console.log(zips)
})
router.post("/create", (req, res) => {
    console.log("creating event...")
  // Form validation
const { errors, isValid } = validateEventInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(404).json(errors);
  }
// User.findOne({ email: req.body.owner }).then(user => {
//     if (user) {
//       return res.status(400).json({ email: "Email already exists" });
//     } else {
      // console.log("image:")
      // console.log(req.body.name)
      const newEvent = new Event({
        name: req.body.name,
        owner: req.body.owner,
        createdDate: req.body.createdDate,
        eventDate: req.body.eventDate,
        description: req.body.description,
        location: req.body.location,
        queryLoc: {type: "Point", coordinates: req.body.location.coordinates},
        // img: req.body.img
      });
      // name: this.state.name,
      //     description: this.state.description,
      //     location: loc,
      //     eventDate: this.state.eventDate,
      //     createdDate: Date.now(),
      //     owner: this.props.auth.user.id
      newEvent
        .save()
        .then(event => res.json(event))
        .catch(err => console.log(err));
// // Hash password before saving in database
//       bcrypt.genSalt(10, (err, salt) => {
//         bcrypt.hash(newUser.password, salt, (err, hash) => {
//           if (err) throw err;
//           newUser.password = hash;
//           newUser
//             .save()
//             .then(user => res.json(user))
//             .catch(err => console.log(err));
//         });
//       });
    // }
  // });
});
router.post("/getEvent", (req, res) => {
  // console.log(req.body.zip)
  Event.findById(req.body.id, function(err, event){
    res.json({event: event})
  })
  console.log("getting event")
})
router.post("/getEvents", (req, res) => {
  milesDistance = 5
 console.log(req.body.zip)
  console.log("getting events")
  Event.find({
  queryLoc: {
   $near: {
    $maxDistance: 1609*milesDistance,
    $geometry: {
     type: "Point",
     coordinates: zips[req.body.zip]
    }
   }
  }
 }).find((error, results) => {
  console.log(results);
  res.json(results)
  if (error) console.log(error);
 });
  
})

router.post("/test", (req, res) => {
  Event.update({_id: "5e5fd727253ae033ca19780b"}, {$set: {img: {data: fs.readFileSync(imgPath)}}}).then(res=> res.json(res)).catch(error => res.json(error))
  // const e = new Event({
  //   img: {data: fs.readFileSync(imgPath)}
  // })
  // console.log(e)
  // e.save().then(event => res.json(event)).catch(error => res.json(error))
})
router.post("/updateInfo", (req, res) => {

})
router.post("/updateImg", (req, res) => {
  
})

 //  milesDistance = 20
 //  Event.find({
 //  queryLoc: {
 //   $near: {
 //    $maxDistance: 1609*milesDistance,
 //    $geometry: {
 //     type: "Point",
 //     coordinates: [-73.9007, 40.8997]
 //    }
 //   }
 //  }
 // }).find((error, results) => {
 //  console.log(results);
 //  res.json(results)
 //  if (error) console.log(error);
 // });


module.exports = router