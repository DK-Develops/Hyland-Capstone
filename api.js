export async function getData(lat, long) {
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;
const response = await fetch(url);
  return await response.json();

}
