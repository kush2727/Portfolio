import React from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

const skillData = {
  labels: [
    "JavaScript",
    "React",
    "Python",
    "Django",
    "Algorithms",
    "Node.js",
    "CSS",
    "Communication",
  ],
  datasets: [
    {
      label: "Skill Proficiency",
      data: [9, 8.5, 9.5, 8, 9, 8, 7.5, 8.5],
      backgroundColor: "rgba(96, 165, 250, 0.3)",
      borderColor: "#60a5fa",
      borderWidth: 2,
      pointBackgroundColor: "#1e293b",
      pointBorderColor: "#60a5fa",
      pointRadius: 5,
      pointHoverRadius: 8,
      tension: 0.2
    }
  ]
};

const options = {
  responsive: true,
  aspectRatio: 1,
  scale: {
    min: 0,
    max: 10,
    ticks: {
      stepSize: 2,
      color: "#cbd5e1",
      font: {
        size: 14
      }
    },
    pointLabels: {
      color: "#fafaf9",
      font: {
        size: 15
      }
    },
    grid: {
      color: "#475569",
    }
  },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Skill Radar",
      color: "#60a5fa",
      font: {
        size: 20
      }
    }
  }
};

export default function RadarChart() {
  return (
    <div style={containerStyle}>
      <Radar data={skillData} options={options} />
    </div>
  );
}

const containerStyle = {
  maxWidth: "450px",
  margin: "40px auto",
  background: "#1e293b",
  borderRadius: "15px",
  padding: "25px 15px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)"
};
