const latitude = 41.4655;
const longitude = -81.9;

const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log("Full response:", data);

    const current = data.current_weather;
    console.log("Temperature:", current.temperature, "°C");
    console.log("Wind Speed:", current.windspeed, "km/h");
    console.log("Time:", current.time);
  })
  .catch(error => {
    console.error("Error fetching weather:", error);
  });

  const temp = current.temp;
      document.getElementById("temp").textContent = temp;
  const windSpeed = current.windspeed;
      document.getElementById("windSpeed").textContent = windSpeed;
  const time = current.time;
      document.getElementById("time").textContent = windSpeed;
