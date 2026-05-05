 import { getData, getClothingRec } from "./api.js";
 document.getElementById("mybutton").addEventListener("click", getLocation);
 export let lat = null;
 export let long = null;
 export let temp = null;
 export let windSpeed = null;
 function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}

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
      setWeatherBackground(weatherData.current_weather.weathercode);
      const message = await getClothingRec(weatherData.current_weather.temperature, weatherData.current_weather.windspeed);
      //document.getElementById("clothesRec").textContent = message;
     
document.getElementById("clothesRec").style.whiteSpace = "pre-line";

const formattedMessage = String(message).replace(/\\n/g, "\n\n");

document.getElementById("clothesRec").textContent = formattedMessage;
}
  function renderWeather(data){
  temp = data.temperature;
  windSpeed = data.windspeed;

  const tempF = celsiusToFahrenheit(temp);

 document.getElementById("temp").textContent =
  temp + "°C / " + tempF.toFixed(1) + "°F";

document.getElementById("windSpeed").textContent =
  windSpeed + " KM/H";
      
  }
 

 function setWeatherBackground(weathercode) {
  document.body.className = "";

  if (weathercode === 0) {
    document.body.classList.add("sunny");
  } 
  else if (weathercode >= 1 && weathercode <= 3) {
    document.body.classList.add("cloudy");
  } 
  else if (weathercode >= 51 && weathercode <= 67) {
    document.body.classList.add("rainy");
  } 
  else if (weathercode >= 71 && weathercode <= 77) {
    document.body.classList.add("snowy");
  } 
  else if (weathercode >= 80 && weathercode <= 99) {
    document.body.classList.add("rainy");
  } 
  else {
    document.body.classList.add("cloudy");
  }
}




function error() {
  alert("Sorry, no position available.");
}

