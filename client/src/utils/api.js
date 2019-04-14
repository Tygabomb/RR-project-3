import axios from "axios";
import { runInNewContext } from "vm";
// import "../../../keys";

// const googleMapsKey = new googleMaps(keys.googleMaps);

// Export an object containing methods we'll use for accessing the Yelp API

export default {
  getRandomResturant: function() { 
    return axios.get("/api/yelp");
  },
  
  getResturantMap: function() {
    return axios.get("https://").then(data => {
      var obj;
    });
  },
  login: function(username, password){
    return axios.post('/api/login', {
      username,
      password
    })
  },
  restaurant: function(restaurantName, resLat, resLong, restaurantAdd, restaurantAdd2){
    return axios.post('/restuarants', {
      restaurantName,
      resLat,
      resLong,
      restaurantAdd,
      restaurantAdd2
    })
  },
  app: function() {
    return axios.get('/api/authenticate').then(res =>{
        console.log(res)
    })
  }
};

// function initMap() {

//   const restaurantLoc = { lat: -25.344, lng: 131.036 };
//   // The map, centered at result restaurant location
//   const map = new google.maps.Map(
//       document.getElementById('map'), { zoom: 4, center:  });
//   // The marker, positioned at resataurant location
//   const marker = new google.maps.Marker({ position: restaurantLoc, map: map });
// }

