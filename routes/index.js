const path = require('path')
const router = require('express').Router()
const apiRoutes = require('./api')

// API Routes
router.use('/api', apiRoutes)

router.get('/', function(req, res) {
 models.User.findAll({
   include: [ models.Task ]
 }).then(function(users) {
   res.render('index', {
     title: 'Sequelize: Express Example',
     users: users
   });
 });
});


// If no API routes are hit, send the React app
router.use(function(req, res) {
 res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
