import { ChartPieIcon } from "@heroicons/react/24/solid";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LineElement,
  RadialLinearScale,
  Title,
  Tooltip,
} from "chart.js";
import zoomPlugin from "chartjs-plugin-zoom";
import React from "react";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  RadialLinearScale,
  ArcElement,
  LineElement,
  zoomPlugin,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CityCard = ({ city, labels }) => {
  const datum = [];

  labels.forEach((v, i) => {
    datum[i] = city.filter((n) => n === v).length;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        fill: false,
        label: "Count of this City",
        data: datum,
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
          "#E7E9ED",
          "#36A2EB",
          "#FF6E00",
          "#8A3324",
          "#9F2B68",
          "#FF00FF",
        ],
      },
    ],
  };

  return (
    <div className="sm:w-1/1.8 p-4 mt-12 sm:mt-0 border-2 rounded-xl border-slate-200">
      <div className="flex flex-col">
        <h2 className="text-2xl flex flex-row gap-2 font-bold text-gray-600 text-left mt-8 mb-2 ms-4">
          <ChartPieIcon className="h-7 w-7 text-gray-600" /> Cities
        </h2>
        <h4 className="text-left text-gray-400 ms-4 mb-8">
          Frequency of publications based on title for each City
        </h4>
      </div>
      <PolarArea data={data} />
    </div>
  );
};

export default CityCard;
