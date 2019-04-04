var models  = require('../models');
var express = require('express');
var router  = express.Router()

  // POST route creating a new user favorite
app.post("", function (req, res) {
    console.log(req.body);
    const { } = req.body;
    db.Post.create({
      where: {
        userName: req.params.userName
      }

    })
});


module.exports = router;