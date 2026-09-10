import React, { useState } from "react";

import {
  getCurrentWeather,
  getForecastWeather,
} from "./services/weatherService";

import WeatherChart from "./components/WeatherChart";

function App() {
  const [city, setCity] = useState("Delhi");

  const [weather, setWeather] = useState(null);

  const [forecast, setForecast] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const searchWeather = async (event) => {
    event.preventDefault();

    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      // Get current weather
      const currentData = await getCurrentWeather(city);

      // Get 5-day forecast
      const forecastData = await getForecastWeather(city);

      setWeather(currentData);
      setForecast(forecastData);
    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        setError("Invalid API key. Please check your OpenWeather API key.");
      } else if (err.response?.status === 404) {
        setError("City not found. Please enter a valid city name.");
      } else {
        setError("Unable to fetch weather information. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🌦️ React Weather Dashboard</h1>

        <p>
          Current weather and 5-day temperature forecast using OpenWeatherMap
          and Chart.js.
        </p>
      </header>

      {/* Search */}
      <form onSubmit={searchWeather} className="search-form">
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
          placeholder="Enter city name"
        />

        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Get Weather"}
        </button>
      </form>

      {/* Error */}
      {error && <div className="error">{error}</div>}

      {/* Current Weather */}
      {weather && (
        <section className="weather-section">
          <div className="section-title">CURRENT WEATHER</div>

          <div className="current-weather">
            <div>
              <h2>
                {weather.name}, {weather.sys?.country}
              </h2>

              <p className="description">{weather.weather?.[0]?.description}</p>
            </div>

            <div className="temperature">{Math.round(weather.main.temp)}°C</div>
          </div>

          <div className="weather-cards">
            <div className="weather-card">
              <span>Feels like</span>
              <strong>{Math.round(weather.main.feels_like)}°C</strong>
            </div>

            <div className="weather-card">
              <span>Humidity</span>
              <strong>{weather.main.humidity}%</strong>
            </div>

            <div className="weather-card">
              <span>Wind</span>
              <strong>{weather.wind.speed} m/s</strong>
            </div>

            <div className="weather-card">
              <span>Pressure</span>
              <strong>{weather.main.pressure} hPa</strong>
            </div>
          </div>
        </section>
      )}

      {/* Forecast */}
      {forecast && (
        <section className="chart-section">
          <div className="section-title">5-DAY FORECAST</div>

          <div className="chart-header">
            <h2>Temperature Forecast</h2>

            <span>Every 3 hours</span>
          </div>

          <div className="chart-wrapper">
            <WeatherChart forecast={forecast} />
          </div>
        </section>
      )}
    </div>
  );
}

export default App;
