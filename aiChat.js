import { temp, windSpeed } from "./interaction.js";
document.getElementById("mybutton").addEventListener("click", getClothingRec);
async function getClothingRec(temp, windSpeed) {
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
         role: "user", content: `What should I wear under these circumstances: temperature is ${temp}°c and wind speed is ${windSpeed} km/h? `
         }
     ],
     stream: false
   })
 });

 const data = await response.json();
 console.log(data.choices[0].message.content);
 return data.choices[0].message.content;
}