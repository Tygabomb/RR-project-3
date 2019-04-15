var db = require('../../models');
var express = require('express');
var router = express.Router()

// POST route creating a new user favorite
router.post("/restaurants", function (req, res) {
  console.log(req.body);
  const restaurant = req.body.restaurant
  db.Restaurant.create(
    restaurant,
    {
      where: {
        userName: req.params.userName
      }
    })
    .then((dbRestaurant) => {
      res.json(dbRestaurant)
    })
});


module.exports = router;