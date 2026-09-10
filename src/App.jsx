import React, { useState } from "react";
import WeatherChart from "./components/WeatherChart";
import {
  getCoordinates,
  getCurrentWeather,
  getHistoricalWeather
} from "./services/weatherService";

const toUnixSeconds = (date) => Math.floor(date.getTime() / 1000);

const formatDate = (date) =>
  new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  }).format(date);

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [history, setHistory] = useState([]);
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
    setWeather(null);
    setHistory([]);

    try {
      const current = await getCurrentWeather(city.trim());
      setWeather(current);

      const coordinates = await getCoordinates(city.trim());

      // Request one observation per day for the previous 5 days.
      // This endpoint requires OpenWeather One Call 3.0 access.
      const now = new Date();
      const timestamps = [5, 4, 3, 2, 1].map((daysAgo) => {
        const d = new Date(now);
        d.setDate(d.getDate() - daysAgo);
        d.setHours(12, 0, 0, 0);
        return toUnixSeconds(d);
      });

      const historical = await getHistoricalWeather(
        coordinates.lat,
        coordinates.lon,
        timestamps
      );

      const rows = historical.map((item, index) => ({
        label: formatDate(new Date(timestamps[index] * 1000)),
        temperature: item.data?.[0]?.temp ?? null
      })).filter((row) => row.temperature !== null);

      setHistory(rows);
    } catch (err) {
      console.error(err);
      const message =
        err.response?.status === 401
          ? "API key is invalid or this historical endpoint is not enabled for your account."
          : err.response?.status === 404
          ? "City or weather data was not found."
          : err.message || "Unable to fetch weather information.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const chartLabels = history.map((item) => item.label);
  const chartTemperatures = history.map((item) => item.temperature);

  return (
    <main className="app">
      <section className="hero">
        <p className="eyebrow">REACT JS LAB</p>
        <h1>Weather Dashboard</h1>
        <p className="subtitle">
          Current weather from OpenWeatherMap with historical temperature
          visualization using Chart.js.
        </p>

        <form className="search" onSubmit={searchWeather}>
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city e.g. Delhi"
            aria-label="City name"
          />
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Get Weather"}
          </button>
        </form>
      </section>

      {error && <div className="error">{error}</div>}

      {weather && (
        <>
          <section className="current-card">
            <div>
              <span className="label">CURRENT WEATHER</span>
              <h2>{weather.name}, {weather.sys?.country}</h2>
              <p className="condition">
                {weather.weather?.[0]?.description}
              </p>
            </div>
            <div className="temperature">
              {Math.round(weather.main.temp)}°C
            </div>
          </section>

          <section className="stats">
            <div className="stat">
              <span>Feels like</span>
              <strong>{Math.round(weather.main.feels_like)}°C</strong>
            </div>
            <div className="stat">
              <span>Humidity</span>
              <strong>{weather.main.humidity}%</strong>
            </div>
            <div className="stat">
              <span>Wind</span>
              <strong>{weather.wind.speed} m/s</strong>
            </div>
            <div className="stat">
              <span>Pressure</span>
              <strong>{weather.main.pressure} hPa</strong>
            </div>
          </section>

          <section className="chart-card">
            <div className="section-heading">
              <div>
                <span className="label">HISTORICAL WEATHER</span>
                <h2>Temperature trend</h2>
              </div>
              <span className="badge">Previous 5 days</span>
            </div>

            {history.length > 0 ? (
              <div className="chart-wrap">
                <WeatherChart
                  labels={chartLabels}
                  temperatures={chartTemperatures}
                />
              </div>
            ) : (
              <p className="muted">
                No historical observations were returned.
              </p>
            )}
          </section>
        </>
      )}

      {!weather && !loading && !error && (
        <section className="empty">
          <div className="weather-icon">☁️</div>
          <h2>Search for a city</h2>
          <p>Enter a city above to load its weather information.</p>
        </section>
      )}

      <footer>
        Built with React, Axios, OpenWeatherMap and Chart.js.
      </footer>
    </main>
  );
}

export default App;