const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
const db  = require('./models')
const apiRoutes = require("./routes/api/users");
const passport = require("passport");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Use apiRoutes
app.use("/api", apiRoutes);


db.sequelize.sync( {/*force: true*/}).then(function() {
  app.listen(PORT, ()=>{
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  })
})