import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

console.log("API KEY LOADED:", API_KEY);

const CURRENT_URL = "https://api.openweathermap.org/data/2.5/weather";

const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

const checkKey = () => {
  if (!API_KEY || API_KEY === "YOUR_OPENWEATHERMAP_API_KEY") {
    throw new Error(
      "Missing OpenWeatherMap API key. Add it to your .env file.",
    );
  }
};

// Get current weather
export const getCurrentWeather = async (city) => {
  checkKey();

  const response = await axios.get(CURRENT_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};

// Get 5-day / 3-hour forecast
export const getForecastWeather = async (city) => {
  checkKey();

  const response = await axios.get(FORECAST_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric",
    },
  });

  return response.data;
};
