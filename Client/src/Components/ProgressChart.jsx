import React from "react";
import { Line } from "react-chartjs-2";
import "../assets/Css/Chart.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

import studentData from "../Data/studentData.js";

const ProgressChart = () => {
  const { progress } = studentData[0];

  const progressValues = Object.values(progress);
  const labels = Object.keys(progress).map(
    (semester, index) => `Semester ${index + 1}`
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Progress",
        data: progressValues,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Progress Over Semesters",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `Semester ${context.dataIndex + 1}: ${context.raw}%`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Semester",
        },
      },
      y: {
        title: {
          display: true,
          text: "Progress",
        },
        min: 0,
        max: 100,
        ticks: {
          callback: function (value) {
            return value + "%";
          },
        },
      },
    },
    legend: {
      position: "bottom",
    },
    animation: {
      duration: 1000,
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart-container">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default ProgressChart;
