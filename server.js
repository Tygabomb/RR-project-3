require('dotenv').config()
const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;
const app = express();
const db  = require('./models')
// const apiRoutes = require("./routes/api/users");
const passport = require("passport");
const userRoutes = require("./routes")


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
// app.use("/api", apiRoutes);

app.use(userRoutes);

// app.get('/api/users', (req, res) => {
//   const users = [
//     {id: 1, firstName: 'John', lastName: 'Doe'},
//     {id: 2, firstName: 'Brad', lastName: 'Traversy'},
//     {id: 3, firstName: 'Mary', lastName: 'Swanson'},
//   ];

//   res.json(users);
// });


db.sequelize.sync( {/*force: true*/}).then(function() {
  app.listen(PORT, ()=>{
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  })
})