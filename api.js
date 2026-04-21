export async function getData(lat, long) {
const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true`;
const response = await fetch(url);
  return await response.json();
}

export async function getClothingRec(temperature, windspeed) {
 const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
   method: "POST",
   headers: {
     "Authorization": 'Bearer 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',
     "Content-Type": 'application/json'
   },
   body: JSON.stringify({
     model: "inclusionai/ling-2.6-flash:free",
     messages: [
       {
         role: "user", content: `What should I wear under these circumstances: temperature is ${temperature}°c and wind speed is ${windspeed} km/h? You have to respond only with clothing for the head, torso, legs, and feet. `
         }
     ],
     stream: false
   })
 });

 const data = await response.json();
 console.log(data.choices[0].message.content);
 return data.choices[0].message.content;
}
