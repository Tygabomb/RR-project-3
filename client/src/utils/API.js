import axios from "axios";

// Export an object containing methods we'll use for accessing the Yelp API

export default {
  getRandomResturant: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },
  
  getResturantList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
