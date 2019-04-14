const router = require('express').Router()
const apiController = require('../../controllers/apiController')

router.route('/yelp')
    .get(apiController)


module.exports = router