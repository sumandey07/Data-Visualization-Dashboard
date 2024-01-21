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
import { ChartPieIcon } from "@heroicons/react/24/outline";
import { Bar } from "react-chartjs-2";
import zoomPlugin from "chartjs-plugin-zoom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  zoomPlugin,
  Tooltip,
  Legend
);

export default function RegionCard({ region, label }) {
  const datum = [];
  label.forEach((v, i) => {
    datum[i] = region.filter((n) => n === v).length;
  });

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          display: true,
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
    labels: label,
    datasets: [
      {
        label: "Count of this Region",
        data: datum,
        backgroundColor: "#E199EE",
        borderColor: "#FFF",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-6 border-2 rounded-xl border-slate-200 ">
      <div className="flex flex-col">
        <h2 className="text-2xl flex flex-row gap-2 font-bold text-gray-600 text-left mt-8 mb-2 ms-4">
          <ChartPieIcon className="h-7 w-7 text-gray-500" /> Regions
        </h2>
        <h4 className="text-left text-gray-400 ms-4 mb-8">
          Frequency of Topics from Each Region
        </h4>
      </div>
      <Bar height="100" options={options} data={data} />
    </div>
  );
}
