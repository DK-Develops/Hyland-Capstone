import { getData } from "./api.js";

const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": "Bearer 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",
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    model: "openrouter/elephant-alpha",
    messages: [
      { 
        role: "user", content: "What should I where under these circumstances, ${temp} and ${windspeed}"
        }
    ],
    stream: true
  })
});

