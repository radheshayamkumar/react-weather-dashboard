# React Weather Dashboard

A lab-ready React application that demonstrates:

- React components and state
- API service separation
- Axios GET requests
- OpenWeatherMap current weather
- OpenWeatherMap geocoding
- Historical weather using the One Call 3.0 Timemachine endpoint
- Chart.js line chart through react-chartjs-2
- Loading and error handling

## Setup

```bash
npm install
```

Create a `.env` file in the project root:

```env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHERMAP_API_KEY
```

Then run:

```bash
npm run dev
```

## Important historical-data note

The standard current-weather endpoint (`/data/2.5/weather`) does not provide historical weather.

This project uses OpenWeather One Call 3.0 Timemachine for historical observations. Your OpenWeather account must have access to that endpoint. If your account does not have historical access, the current-weather part will still work, but the historical chart request will fail.

## Architecture

```text
App.jsx
   |
   +--> weatherService.js
   |       |
   |       +--> OpenWeatherMap
   |
   +--> WeatherChart.jsx
           |
           +--> Chart.js
```

## Lab learning flow

```text
User enters city
       ↓
React state
       ↓
Weather service
       ↓
Axios
       ↓
OpenWeatherMap
       ↓
JSON response
       ↓
React state
       ↓
Current weather + historical data
       ↓
Chart.js line graph
```
