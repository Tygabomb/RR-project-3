const models  = require('../models');
const express = require('express');
const router  = express.Router()

// Load User model
const { restaurant } = require("../../models");

app.post("/restaurants", function (req, res) {
    console.log(req.body)
    
    const restaurant = new restaurant({
      restaurantName: req.params.restaurantName,
      resLat: req.params.resLat,
      resLong: req.params.resLong,
      restaurantAdd: req.params.restaurantAdd,
      restaurantAdd2: req.params.restaurantAdd2,
    })
});


module.exports = router;