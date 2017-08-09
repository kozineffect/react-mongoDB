// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var mongo_login = require("./private/login.js");
var path = require("path");

// Require Schemas
var User = require("./src/models/user.js");

// Create Instance of Express
var app = express();
var PORT = process.env.PORT || 8080; // Sets an initial port. We'll use this later in our listener

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static assets
app.use(express.static(path.resolve(__dirname, 'public')));

// Always return the main index.html, so react-router render the route in the client
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// -------------------------------------------------
// MongoDB Configuration configuration
mongoose.connect(mongo_login);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// app.get('/', function(request, response) {
//   response.render('index');
// });
// -------------------------------------------------

// Route to get all saved articles
// app.get("/api/saved", function(req, res) {

//   User.find({})
//     .exec(function(err, doc) {

//       if (err) {
//         console.log(err);
//       }
//       else {
//         res.send(doc);
//       }
//     });
// });

// // Route to add an article to saved list
app.post("/signup/api", function(req, res) {
  var newUser = new User(req.body);

  console.log(req.body);

  newUser.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// // Route to delete an article from saved list
// app.delete("/api/saved/", function(req, res) {

//   var url = req.param("url");

//   User.find({ url: url }).remove().exec(function(err) {
//     if (err) {
//       console.log(err);
//     }
//     else {
//       res.send("Deleted");
//     }
//   });
// });

// Any non API GET routes will be directed to our React App and handled by React Router

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
