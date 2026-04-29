const apiConfig = {
  baseUrl: 'https://api.openweathermap.org/data/2.5/weather',
  apiKey: 'YOUR_OPENWEATHERMAP_API_KEY',
  units: 'metric',
};

const q = selector => document.querySelector(selector);

const elements = {
  form: q('#weather-form'),
  cityInput: q('#city-input'),
  errorMessage: q('#error-message'),
  card: q('#weather-card'),
  city: q('#weather-city'),
  main: q('#weather-main'),
  temp: q('#weather-temp'),
  feels: q('#weather-feels'),
  humidity: q('#weather-humidity'),
  wind: q('#weather-wind'),
  condition: q('#weather-condition'),
};

function showError(message) {
  elements.errorMessage.textContent = message;
  elements.errorMessage.classList.add('visible');
  elements.card.classList.add('hidden');
}

function clearError() {
  elements.errorMessage.textContent = '';
  elements.errorMessage.classList.remove('visible');
}

function showWeather(data) {
  elements.city.textContent = `${data.name}, ${data.sys.country}`;
  elements.main.textContent = `${Math.round(data.main.temp)}°C`;
  elements.temp.textContent = data.main.temp.toFixed(1);
  elements.feels.textContent = data.main.feels_like.toFixed(1);
  elements.humidity.textContent = data.main.humidity;
  elements.wind.textContent = data.wind.speed.toFixed(1);
  elements.condition.textContent = `${data.weather[0].main} (${data.weather[0].description})`;

  elements.card.classList.remove('hidden');
}

async function fetchWeather(city) {
  const url = `${apiConfig.baseUrl}?q=${encodeURIComponent(city)}&units=${apiConfig.units}&appid=${apiConfig.apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found. Check the spelling and try again.');
      }
      throw new Error(`OpenWeather error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message || 'Network error, please try again.');
  }
}

async function handleSubmit(event) {
  event.preventDefault();
  const city = elements.cityInput.value.trim();

  if (!city) {
    showError('Type a city name first.');
    return;
  }

  clearError();
  elements.card.classList.add('hidden');

  try {
    const weatherData = await fetchWeather(city);
    showWeather(weatherData);
  } catch (err) {
    showError(err.message);
  }
}

function init() {
  elements.form.addEventListener('submit', handleSubmit);
}

init();
