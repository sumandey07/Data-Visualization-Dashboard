import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { ChartBarIcon } from "@heroicons/react/24/solid";
import zoomPlugin from "chartjs-plugin-zoom";
import React from "react";
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

const YearsCard = ({ startyears, endyears, startyearslabel }) => {
  const min = Math.min(...startyearslabel);
  const arrayRange = (start, stop) =>
    Array.from({ length: stop - start }, (v, index) => start + index);

  const options = {
    scales: {
      x: {
        min: min,
        max: min + 5,
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
        text: "Years",
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

  const labels = arrayRange(min, 3000);

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Start Year of Specific Title",
        data: startyears,
        backgroundColor: "rgba(53, 162, 235, 0.7)",
      },
      {
        label: "End Year of Specific Title",
        data: endyears,
        backgroundColor: "rgba(255, 99, 132, 0.7)",
      },
    ],
  };

  return (
    <div className="p-4 border-2 rounded-xl border-slate-200">
      <h2 className="text-2xl items-start flex flex-row gap-2 font-bold text-gray-600 text-left my-8 ms-6">
        <ChartBarIcon className="h-7 w-7 text-gray-500" />
        Years
      </h2>
      <Bar height="120" options={options} data={data} />
    </div>
  );
};

export default YearsCard;
