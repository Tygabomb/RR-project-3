import axios from "axios";

// Export an object containing methods we'll use for accessing the Yelp API

export default {
  getRandomResturant: function() { 
    return axios.get("https://api.yelp.com/v3/businesses/search");
  },
  
  getResturantList: function() {
    return axios.get("https://");
  }
};
