const path = require("path");
const router = require("express").Router();
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", { session: false });

const routes = require("./v1");

// API Routes
router.use("/v1", routes);



import axios from "axios";

// Export an object containing methods we'll use for accessing the Yelp API

export default {
  getRandomResturant: function() {
    return axios.get("https:// ");
  },
  
  getResturantList: function() {
    return axios.get("https:// ");
  }
};


module.exports = router;