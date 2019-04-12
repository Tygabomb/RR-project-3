const db = require('../models')

const Axios = require('axios')

module.exports = function yelp(req, res) {
    console.log("Accessing Yelp")
    Axios.get("https://api.yelp.com/v3/businesses/search", {
        headers: {
            Authorization: `Bearer ${process.env.YELP_SECRET_KEY}`,
        },

        params: {
            term: 'restaurants',
            location: '85705',
            limit: 10,
            radius: 8046,
            open_now: true,
            sort_by: 'rating'
        }
    })
        .then(response => {
            console.log(response.data.businesses)
            res.json(response.data.businesses)
        })
}
