import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
console.log("API KEY LOADED:", API_KEY);
const CURRENT_URL = "https://api.openweathermap.org/data/2.5/weather";
const GEO_URL = "https://api.openweathermap.org/geo/1.0/direct";
const TIMEMACHINE_URL =
  "https://api.openweathermap.org/data/3.0/onecall/timemachine";

const checkKey = () => {
  if (!API_KEY || API_KEY === "YOUR_OPENWEATHERMAP_API_KEY") {
    throw new Error(
      "Missing OpenWeatherMap API key. Add it to your .env file.",
    );
  }
};

export const getCurrentWeather = async (city) => {
  checkKey();
  const response = await axios.get(CURRENT_URL, {
    params: { q: city, appid: API_KEY, units: "metric" },
  });
  return response.data;
};

export const getCoordinates = async (city) => {
  checkKey();
  const response = await axios.get(GEO_URL, {
    params: { q: city, limit: 1, appid: API_KEY },
  });
  if (!response.data.length) throw new Error("City not found.");
  return response.data[0];
};

export const getHistoricalWeather = async (lat, lon, timestamps) => {
  checkKey();
  const results = await Promise.all(
    timestamps.map(async (dt) => {
      const response = await axios.get(TIMEMACHINE_URL, {
        params: { lat, lon, dt, appid: API_KEY, units: "metric" },
      });
      return response.data;
    }),
  );
  return results;
};
