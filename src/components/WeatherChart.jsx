import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function WeatherChart({ labels, temperatures }) {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Temperature (°C)",
        data: temperatures,
        tension: 0.35,
        borderWidth: 3,
        pointRadius: 4
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
      title: { display: false }
    },
    scales: {
      y: {
        title: { display: true, text: "Temperature (°C)" }
      },
      x: {
        title: { display: true, text: "Date" }
      }
    }
  };

  return <Line data={chartData} options={options} />;
}