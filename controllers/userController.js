
import User from '../models/User';

// Routes
// =============================================================
module.exports = function (app) {
  // POST route registering a new user
  app.post("/register", function (req, res) {
    console.log(req.body);
    const { title, body, category } = req.body;
    db.Post.create({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      userPassword: userPassword,
      userEmail: userEmail
    })
      .then(function (dbPost) {
        res.json(dbPost);
      });
  });

  // DELETE route for deleting posts
  // app.delete("/api/posts/:id", function (req, res) {
  //   db.Post.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function (dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // // PUT route for updating posts
  // app.put("/api/posts", function (req, res) {
  //   db.Post.update(req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function (dbPost) {
  //       res.json(dbPost);
  //     });
  // });
};
