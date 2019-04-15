var models = require('../models');
var express = require('express');
var router = express.Router()

// POST route creating a new user favorite
app.post("api/restaurants", function (req, res) {
  console.log(req.body);
  const { } = req.body.restaurant
  db.Restaurant.create({
    where: {
      userName: req.params.userName
    }

  })
});


module.exports = router;