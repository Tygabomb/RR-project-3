import restaurants from '../models/restaurants';

module.exports = function (app) {
    // POST route registering a new user
    app.post("/restaurants", function (req, res) {
      console.log(req.body);
      const { title, body, category } = req.body;
      db.Post.create({
        restaurantName: restaurantName,
        resLat: resLat,
        resLong: resLong,
        restaurantAdd: restaurantAdd,
        restaurantAdd2: restaurantAdd2
      })
        .then(function (dbPost) {
          res.json(dbPost);
        });
    });
};