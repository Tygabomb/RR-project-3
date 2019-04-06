const db = require('../models')

const Axios = require('axios')

module.exports = function yelp() {
    Axios.get(`https://api.yelp.com/v3/businesses/search`, {
        headers: {
            Authorization: `Bearer ${YELP_SECRET_KEY} `,
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
        .then(res => {
            res.data.businesses.forEach(business => {
                let { name, url, rating, location, image_url, coordinates } = business
                console.log(business)
                res.json(business)
            });
        })


        .catch(err => res.status(422).json(err))
}
