import axios from "axios";
import "../../../keys";

const googleMapsKey = new googleMaps(keys.googleMaps);

// Export an object containing methods we'll use for accessing the Yelp API

export default {
  getRandomResturant: function() { 
    return axios.get("https://api.yelp.com/v3/businesses/search");
  },
  
  getResturantList: function() {
    return axios.get("https://").then(data => {
      var obj;
    });
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

// <script async defer
//   src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap">
// </script>