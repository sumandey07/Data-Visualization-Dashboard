import zoomPlugin from "chartjs-plugin-zoom";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React from "react";
import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  zoomPlugin,
  Title,
  Tooltip,
  Filler,
  Legend
);

const RelevanceCard = ({ relevance }) => {
  const options = {
    scales: {
      x: {
        min: 0,
        max: 20,
        ticks: { display: true },
        grid: {
          display: false,
          drawBorder: false,
        },
      },
      y: {
        ticks: {
          display: true,
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
        text: "Relevance",
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
        fill: false,
        label: "Relevance",
        data: relevance,
        borderColor: "#AA36CA",
        pointBackgroundColor: "rgb(255, 165, 0)",
        pointRadius: 3,
        pointHoverBackgroundColor: "#ff0000",
      },
    ],
  };

  return (
    <div className="p-4 border-2 rounded-xl border-slate-200">
      <div className="flex flex-col">
        <h2 className="text-2xl flex flex-row gap-2 items-start font-bold text-gray-600 text-left mt-8 mb-2 ms-6">
          <ChartBarSquareIcon className="h-8 w-8 text-gray-500" />
          Relevance
        </h2>
        <h4 className="text-left text-gray-400 ms-6 mb-12">
          Relevance of each publications based on title
        </h4>
      </div>
      <Line options={options} height="100" data={data} />
    </div>
  );
};

export default RelevanceCard;
