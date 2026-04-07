 import { getData } from "./api.js";
 document.getElementById("mybutton").addEventListener("click", getLocation);
 export let lat = null;
 export let long = null;
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else 
  { 
   console.log("Browser does not support geolocation");
  }
}
function success(position) {
   lat = position.coords.latitude; 
   long = position.coords.longitude;
  console.log(lat, long);
 console.log(getData(lat,long));
}

function error() {
  alert("Sorry, no position available.");
}
