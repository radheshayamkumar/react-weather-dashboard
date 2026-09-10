import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const WeatherChart = ({ forecast }) => {
  if (!forecast || !forecast.list) {
    return null;
  }

  const chartData = forecast.list.filter((_, index) => index % 2 === 0);

  const labels = chartData.map((item) => {
    const date = new Date(item.dt * 1000);

    return date.toLocaleString([], {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });
  });

  const temperatures = chartData.map((item) => item.main.temp);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        tension: 0.3,
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: true,
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.parsed.y} °C`;
          },
        },
      },
    },

    scales: {
      y: {
        title: {
          display: true,
          text: "Temperature (°C)",
        },
      },

      x: {
        title: {
          display: true,
          text: "Date & Time",
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Line data={data} options={options} />
    </div>
  );
};

export default WeatherChart;
