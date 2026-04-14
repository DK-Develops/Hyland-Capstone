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
async function success(position) {
   lat = position.coords.latitude; 
   long = position.coords.longitude;
   
  let weatherData = await getData(lat, long);
      console.log("myAPIData", weatherData);
      renderWeather(weatherData.current_weather);
}
  function renderWeather(data){
    const temp = data.temperature;
      document.getElementById("temp").textContent = temp + "°C";
    const windSpeed = data.windspeed;
      document.getElementById("windSpeed").textContent = windSpeed + " KM/H";
  }
function error() {
  alert("Sorry, no position available.");
}
