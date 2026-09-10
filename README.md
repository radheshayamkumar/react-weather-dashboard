````markdown
# 🌦️ React Weather Dashboard

A simple React JS application that fetches weather information from
OpenWeatherMap API and displays current weather information along with
historical weather information using Chart.js.

This project is created for educational/laboratory purposes to help
students understand React JS, API integration, Axios, environment
variables, and graphical data representation.

---

# 📌 1. Project Objective

The objective of this project is to develop a React JS application that:

1. Accepts a city name from the user.
2. Fetches current weather information.
3. Displays temperature and other weather details.
4. Fetches historical weather information where API access is available.
5. Displays historical temperature using a graphical chart.
6. Demonstrates API integration in React JS.

---

# 🛠️ 2. Technologies Used

- React JS
- Vite
- JavaScript
- Axios
- OpenWeatherMap API
- Chart.js
- React-Chartjs-2
- CSS
- Git
- GitHub

---

# 💻 3. Software Requirements

Before starting the project, install the following software.

## 3.1 Node.js

Download and install Node.js from:

https://nodejs.org/

After installation, verify it using:

```bash
node -v
````

Example:

```text
v22.x.x
```

Also check npm:

```bash
npm -v
```

Example:

```text
10.x.x
```

If both commands display a version number, Node.js is installed
correctly.

---

# 🧑‍💻 4. Install Visual Studio Code

Download and install Visual Studio Code:

[https://code.visualstudio.com/](https://code.visualstudio.com/)

VS Code is used to write and manage the React project.

Recommended VS Code extensions:

* ES7+ React/Redux/React-Native Snippets
* Prettier - Code formatter

Extensions are optional.

---

# 📥 5. Download / Clone the Project

There are two ways to get this project.

## Method 1: Clone using Git

Open a terminal and run:

```bash
git clone https://github.com/radheshayamkumar/react-weather-dashboard.git
```

Move into the project folder:

```bash
cd react-weather-dashboard
```

---

## Method 2: Download ZIP

Download the project ZIP from GitHub.

After downloading:

1. Extract the ZIP file.
2. Open the extracted folder.
3. Open the folder in VS Code.

The folder should contain:

```text
react-weather-dashboard/
├── package.json
├── package-lock.json
├── index.html
├── README.md
└── src/
```

---

# 📂 6. Open Project in VS Code

Open Visual Studio Code.

Select:

```text
File → Open Folder
```

Select:

```text
react-weather-dashboard
```

Make sure you open the actual project folder.

---

# ⌨️ 7. Open VS Code Terminal

In VS Code:

```text
Terminal → New Terminal
```

You should see something similar to:

```text
PS C:\Users\Student\Downloads\react-weather-dashboard>
```

---

# 📦 8. Install Project Dependencies

Before running the application, install all required packages.

Run:

```bash
npm install
```

This command reads the `package.json` file and installs the required
dependencies into the `node_modules` folder.

Wait until the installation is completed.

---

# 📦 9. Install Required Packages Manually

If the packages are not already installed, run:

```bash
npm install axios
```

Install Chart.js:

```bash
npm install chart.js
```

Install React Chart.js:

```bash
npm install react-chartjs-2
```

If you are creating the project from scratch, install React Router
only if routing is required:

```bash
npm install react-router-dom
```

For this weather project, React Router is not required.

---

# 🔑 10. Create OpenWeatherMap Account

This project uses the OpenWeatherMap API.

Visit:

[https://openweathermap.org/](https://openweathermap.org/)

Create an account or log in to your existing account.

---

# 🔐 11. Generate API Key

After logging in:

1. Open your OpenWeatherMap account.
2. Go to API Keys.
3. Create a new API key.
4. Copy the API key.

Example:

```text
1234567890abcdef1234567890abcdef
```

Do not share your real API key with other people.

---

# 📄 12. Create `.env` File

Create a file named:

```text
.env
```

The `.env` file must be located in the **project root**.

Correct:

```text
react-weather-dashboard/
│
├── .env
├── package.json
├── index.html
├── README.md
│
└── src/
```

Incorrect:

```text
react-weather-dashboard/
│
└── src/
    └── .env
```

---

# ✏️ 13. Add API Key to `.env`

Open `.env` and write:

```env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Replace `YOUR_OPENWEATHER_API_KEY` with your actual API key.

Example:

```env
VITE_WEATHER_API_KEY=1234567890abcdef1234567890abcdef
```

Do not add quotes.

Correct:

```env
VITE_WEATHER_API_KEY=1234567890abcdef
```

Avoid:

```env
VITE_WEATHER_API_KEY="1234567890abcdef"
```

---

# 🚫 14. Protect Your API Key

Never upload your `.env` file to GitHub.

Your `.gitignore` file should contain:

```gitignore
node_modules/
dist/
.env
.env.local
```

This prevents Git from uploading your API key.

You can create `.env.example` for students:

```env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Students should create their own `.env` file and add their own API key.

---

# 🔄 15. Restart the Development Server

Whenever you create or modify `.env`, restart Vite.

Stop the server:

```text
Ctrl + C
```

Start it again:

```bash
npm run dev
```

---

# ▶️ 16. Run the React Application

Start the development server:

```bash
npm run dev
```

You will see something similar to:

```text
VITE vX.X.X ready

Local:
http://localhost:5173/
```

Open the displayed address in your browser.

Example:

```text
http://localhost:5173/
```

---

# 🌐 17. Test the Application

Enter a city name such as:

```text
Delhi
```

Click:

```text
Search
```

The application should display the current weather.

Try:

```text
Mumbai
Pune
Bangalore
London
New York
Tokyo
```

---

# 🌦️ 18. How the Application Works

The basic flow of the application is:

```text
User enters city
       ↓
User clicks Search
       ↓
React event handler executes
       ↓
App.jsx calls weather service
       ↓
weatherService.js sends API request
       ↓
OpenWeatherMap API
       ↓
Weather data returned
       ↓
React updates state
       ↓
Weather displayed
```

---

# 📡 19. OpenWeatherMap API

The application uses the Current Weather API.

Endpoint:

```text
https://api.openweathermap.org/data/2.5/weather
```

The request contains:

```text
q       → City name
appid   → API key
units   → Temperature unit
```

Example:

```text
https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric
```

---

# 🧪 20. Test API Directly

You can test your API key directly in a browser.

Replace `YOUR_API_KEY`:

```text
https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=YOUR_API_KEY&units=metric
```

If the API key is working, you should receive JSON data.

Example:

```json
{
  "weather": [
    {
      "main": "Clouds"
    }
  ],
  "main": {
    "temp": 30.5,
    "humidity": 60
  },
  "name": "Delhi"
}
```

---

# 📊 21. Chart.js

Chart.js is used to display weather data graphically.

The project uses:

```text
chart.js
react-chartjs-2
```

A line chart can show temperature changes over different dates.

Example:

```text
Temperature
    |
35° |          ●
30° |     ●         ●
25° | ●                 ●
20° |
    +------------------------
       Day1 Day2 Day3 Day4
```

---

# 📜 22. Historical Weather

Historical weather data is different from current weather data.

The basic Current Weather API provides current weather information.

Historical weather requires an OpenWeather API product/plan that
provides historical or time-machine data.

Therefore:

```text
Current Weather
       ↓
Available through Current Weather API

Historical Weather
       ↓
Requires appropriate historical API access
```

If current weather works but historical weather does not work,
check your OpenWeather API access and subscription.

---

# 📂 23. Project Structure

```text
react-weather-dashboard/
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
│
└── src/
    │
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    │
    ├── components/
    │   └── WeatherChart.jsx
    │
    └── services/
        └── weatherService.js
```

---

# 📄 24. Important Files

## `main.jsx`

This is the entry point of the React application.

It renders the `App` component.

Example:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

# 📄 25. `App.jsx`

`App.jsx` contains the main application logic.

It handles:

* User input
* Search button
* API request
* Loading state
* Error handling
* Weather display
* Chart data

Example:

```jsx
const [city, setCity] = useState("");
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(false);
```

---

# 📄 26. `weatherService.js`

This file contains API-related functions.

Example:

```jsx
export const getCurrentWeather = async (city) => {
  const response = await axios.get(CURRENT_URL, {
    params: {
      q: city,
      appid: API_KEY,
      units: "metric"
    }
  });

  return response.data;
};
```

The service separates API logic from the user interface.

---

# 📄 27. `WeatherChart.jsx`

This component is responsible for displaying weather information
graphically using Chart.js.

Example:

```jsx
<Line data={chartData} options={options} />
```

---

# ⚛️ 28. React Concepts Used

This project demonstrates several important React concepts.

## Components

The application is divided into components.

Example:

```jsx
<WeatherChart />
```

---

## State

State stores information that changes during application execution.

Example:

```jsx
const [weather, setWeather] = useState(null);
```

---

## Event Handling

The application responds to user actions.

Example:

```jsx
<form onSubmit={searchWeather}>
```

---

## Props

Props are used to pass data between components.

Example:

```jsx
<WeatherChart data={chartData} />
```

---

## Async/Await

API requests are asynchronous.

Example:

```jsx
const response = await axios.get(url);
```

---

## Conditional Rendering

The application displays different content depending on the state.

For example:

```text
Loading...
```

or:

```text
Weather information
```

or:

```text
Error message
```

---

# ❌ 29. Common Errors and Solutions

## Error: `401 Unauthorized`

Example:

```text
401 Unauthorized
Invalid API key
```

Possible reasons:

* Incorrect API key
* API key has not been activated
* API key was copied incorrectly
* API key was revoked
* Account/API access problem

Solution:

1. Check your OpenWeather API key.
2. Check your `.env` file.
3. Make sure the variable starts with `VITE_`.
4. Restart the Vite server.
5. Test the API directly in your browser.

---

# ❌ 30. Error: Missing API Key

If you see:

```text
Missing OpenWeatherMap API key
```

Check:

```text
.env
```

It should contain:

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

Make sure `.env` is in the project root.

Restart:

```bash
npm run dev
```

---

# ❌ 31. Blank Screen

If the browser displays a blank screen:

1. Open Developer Tools.
2. Press:

```text
F12
```

3. Select the Console tab.
4. Check the error message.

You can also restart the development server:

```text
Ctrl + C
```

Then:

```bash
npm run dev
```

---

# ❌ 32. City Not Found

If the application says the city was not found:

Try a simple city name:

```text
Delhi
```

instead of:

```text
Delhi, India, Asia
```

You can also try:

```text
Mumbai
Pune
London
Tokyo
```

---

# 🏗️ 33. Build the Application

When the application is ready for production, run:

```bash
npm run build
```

Vite creates a production-ready folder:

```text
dist/
```

---

# 👀 34. Preview Production Build

Run:

```bash
npm run preview
```

This allows you to preview the production version locally.

---

# 📦 35. Important NPM Commands

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build project:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# 🐙 36. Git and GitHub

Students can use Git to maintain different versions of their project.

Check Git installation:

```bash
git --version
```

Initialize Git:

```bash
git init
```

Add files:

```bash
git add .
```

Create a commit:

```bash
git commit -m "Initial commit"
```

Push changes:

```bash
git push
```

---

# 🔄 37. Updating the GitHub Project

After making changes:

```bash
git add .
```

Then:

```bash
git commit -m "Updated weather dashboard"
```

Then:

```bash
git push
```

---

# 🔐 38. Security Warning

Never upload your actual API key to GitHub.

Do NOT write:

```jsx
const API_KEY = "your-real-api-key";
```

inside your source code.

Use:

```env
VITE_WEATHER_API_KEY=YOUR_API_KEY
```

and keep `.env` inside `.gitignore`.

Important:

Vite variables beginning with `VITE_` are available to the
client-side application. Therefore, they should not be treated as
fully secret credentials in a production application.

For production applications, a backend or serverless API proxy should
normally be used to protect API credentials.

---

# 🎓 39. Student Practice Tasks

After understanding the application, students should try the
following tasks.

## Beginner

1. Change the application title.
2. Change the CSS design.
3. Add weather icons.
4. Add minimum temperature.
5. Add maximum temperature.
6. Add sunrise and sunset.
7. Add country name.
8. Add a reset button.

## Intermediate

1. Add Celsius/Fahrenheit conversion.
2. Add a dropdown for cities.
3. Add a loading animation.
4. Add a 5-day forecast.
5. Add search history.
6. Add multiple charts.
7. Make the application responsive.

## Advanced

1. Add browser geolocation.
2. Display weather for the user's location.
3. Add a dark/light mode.
4. Create reusable WeatherCard components.
5. Store recent searches using localStorage.
6. Add weather forecast charts.
7. Add more weather statistics.

---

# 🎯 40. Learning Outcomes

After completing this project, students should be able to:

* Create a React JS application.
* Create React components.
* Use JSX.
* Use `useState()`.
* Handle user events.
* Work with forms.
* Make REST API requests.
* Use Axios.
* Process JSON data.
* Use environment variables.
* Display dynamic data.
* Create charts using Chart.js.
* Understand asynchronous JavaScript.
* Use Git and GitHub.

---

# 🚀 41. Quick Start

For students who already have Node.js installed:

```bash
git clone https://github.com/radheshayamkumar/react-weather-dashboard.git

cd react-weather-dashboard

npm install
```

Create `.env`:

```env
VITE_WEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
```

Then run:

```bash
npm run dev
```

Open:

```text
http://localhost:5173/
```

Search for a city and view its weather.

---

# 📚 42. Recommended Learning Order

Students should understand the project in this order:

```text
1. HTML / CSS basics
        ↓
2. JavaScript basics
        ↓
3. React components
        ↓
4. JSX
        ↓
5. Props
        ↓
6. State and useState
        ↓
7. Event handling
        ↓
8. Forms
        ↓
9. Async/Await
        ↓
10. REST API
        ↓
11. Axios
        ↓
12. Environment variables
        ↓
13. Chart.js
        ↓
14. Git and GitHub
```

---

# 📌 43. Important Note for Students

Do not simply copy the project.

Students should understand:

* What each file does.
* How React components communicate.
* How the API request is created.
* How the API response is received.
* How state is updated.
* How data is displayed.
* How Chart.js receives data.
* Why `.env` is used.
* Why API keys should not be uploaded to GitHub.

The purpose of this project is to understand **how React works with
real-world APIs**.

---

# 👨‍🏫 Educational Project

This project is intended for educational and laboratory purposes.

Students are encouraged to modify the application, experiment with
new features, and create their own versions of the Weather Dashboard.

---

## ⭐ Happy Learning!

Learn → Experiment → Modify → Build Your Own Application 🚀

````




