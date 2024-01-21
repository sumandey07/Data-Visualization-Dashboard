import { ChartBarSquareIcon } from "@heroicons/react/24/outline";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
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

export default function CountryCard({ country, countrylabels }) {
  const datum = [];

  countrylabels.forEach((v, i) => {
    datum[i] = country.filter((n) => n === v).length;
  });

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        min: 0,
        max: 6,
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
        text: "Countries",
      },
      zoom: {
        pan: {
          enabled: true,
          mode: "y",
        },
        zoom: {
          pinch: {
            enabled: true,
          },
          wheel: {
            enabled: true,
            speed: 0.05,
          },
          mode: "y",
        },
      },
    },
  };

  const data = {
    labels: countrylabels,
    datasets: [
      {
        label: "Count of publications based on title for this Country",
        data: datum,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="sm:w-1/1.8 p-4 border-2 rounded-xl border-slate-200">
      <div className="flex flex-col">
        <h2 className="text-2xl flex flex-row gap-2 items-center font-bold text-gray-600 text-left mt-8 mb-2 ms-4">
          <ChartBarSquareIcon className="h-7 w-7 text-gray-500" />
          Countries
        </h2>
        <h4 className="text-left text-gray-400 ms-4 mb-8">
          Frequency of publications based on title for each Country
        </h4>
      </div>
      <Bar options={options} data={data} />
    </div>
  );
}
