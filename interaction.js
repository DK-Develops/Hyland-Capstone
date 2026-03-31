function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  } else { 
   console.log("Browser does not support geolocation");
  }
}
function success(position) {
  const lat = position.coords.latitude; 
  const long = position.coords.longitude;
  console.log(lat, long);
}

function error() {
  alert("Sorry, no position available.");
}
