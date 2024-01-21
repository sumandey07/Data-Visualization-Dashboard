import {
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import { ChartBarIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  zoomPlugin
);

const LikelihoodCard = ({ likelihood }) => {
  const options = {
    scales: {
      x: {
        min: 0,
        max: 20,
        // ticks: { display: false },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: true,
          max: 5,
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
        text: "Intensity",
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "x",
        },
        zoom: {
          pinch: {
            enabled: true,
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

  const labels = Array(1001)
    .fill(0)
    .map((_, i) => i);

  const data = {
    labels,
    datasets: [
      {
        label: "Likelihood",
        data: likelihood,
        backgroundColor: "#F4BB44",
      },
    ],
  };

  return (
    <div className="p-4 border-2 rounded-xl border-slate-200">
      <h2 className="text-2xl items-start font-bold flex flex-row gap-2 text-gray-600 text-left mt-8 mb-2 ms-6">
        <ChartBarIcon className="h-7 w-7 text-gray-500" />
        Likelihood
      </h2>
      <h4 className="text-left text-gray-400 ms-6 mb-8">
        Likelihood for each topic
      </h4>
      <Bar height="100" options={options} data={data} />
    </div>
  );
};

export default LikelihoodCard;
