import zoomPlugin from "chartjs-plugin-zoom";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  zoomPlugin,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TopicsCard({ topics, label }) {
  const options = {
    scales: {
      x: {
        min: 0,
        max: 15,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          stepSize: 1,
        },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Topics",
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          pinch: {
            enabled: false,
          },
          wheel: {
            enabled: true,
            speed: 0.05,
          },
          mode: "x",
        },
      },
    },
  };

  const datum = [];
  label.forEach((v, i) => {
    datum[i] = topics.filter((n) => n === v).length;
  });

  const data = {
    labels: label,
    datasets: [
      {
        label: "Count of this Topic",
        data: datum,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="max-h-xl p-4 border-2 rounded-xl border-slate-200">
      <div className="flex flex-col">
        <h2 className="text-2xl flex flex-row gap-2 font-bold text-gray-600 text-left mt-8 mb-2 ms-6">
          <ChartBarSquareIcon className="h-8 w-8 text-gray-500" />
          Topics
        </h2>
        <h4 className="text-left text-gray-400 ms-6 mb-8">
          Frequency of Topics
        </h4>
      </div>
      <Bar options={options} height="120" data={data} />
    </div>
  );
}
