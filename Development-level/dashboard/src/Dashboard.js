import { ChevronUpIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useState } from "react";
import CityCard from "./components/CityCard";
import CountryCard from "./components/CountryCard";
import IntensityCard from "./components/IntensityCard";
import LikelihoodCard from "./components/LikelihoodCard";
import RegionCard from "./components/RegionCard";
import RelevanceCard from "./components/RelevanceCard";
import TopicsCard from "./components/TopicsCard";
import YearsCard from "./components/YearsCard";

const Dashboard = ({ results }) => {
  const [selected, setSelected] = useState("none");
  const [items, setItems] = useState(results);

  // Defining all the variables

  const intensity = results.map((result) => result.intensity);
  const likelihood = results.map((result) => result.likelihood);
  const relevance = results.map((result) => result.relevance);
  const startyears = results.map((result) => result.start_year);
  const endyears = results.map((result) => result.end_year);
  const country = results.map((result) => result.country);
  const region = results.map((result) => result.region);
  const topics = results.map((result) => result.topic);
  const city = results.map((result) => result.city);
  const swot = results.map((result) => result.swot);
  const pestle = results.map((result) => result.pestle);
  const source = results.map((result) => result.source);
  const sector = results.map((result) => result.sector);
  results = items;
  let sectorlabels = [...new Set(sector)];
  sectorlabels = sectorlabels.filter((n) => n);
  let swotlabels = [...new Set(swot)];
  swotlabels = swotlabels.filter((n) => n);
  let pestlelabels = [...new Set(pestle)];
  pestlelabels = pestlelabels.filter((n) => n);
  let sourcelabels = [...new Set(source)];
  sourcelabels = sourcelabels.filter((n) => n);
  let citylabels = [...new Set(city)];
  citylabels = citylabels.filter((n) => n);
  let countrylabels = [...new Set(country)];
  countrylabels = countrylabels.filter((n) => n);
  let regionlabels = [...new Set(region)];
  regionlabels = regionlabels.filter((n) => n);
  let topiclabels = [...new Set(topics)];
  topiclabels = topiclabels.filter((n) => n);
  let startyearslabel = [...new Set(startyears)];
  let endyearslabel = [...new Set(endyears)];
  startyearslabel = startyearslabel.filter((n) => n);
  endyearslabel = endyearslabel.filter((n) => n);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState(false);

  const allFilters = {
    none: [""],
    endyearslabel,
    topiclabels,
    regionlabels,
    countrylabels,
    citylabels,
    sourcelabels,
    pestlelabels,
    swotlabels,
    sectorlabels,
  };

  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    if (scrollPosition >= 150) {
      return setshowGoTop(true);
    } else if (scrollPosition < 150) {
      return setshowGoTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  // All the filters

  const filterItems = (selected, i) => {
    if (selected === "endyearslabel") {
      const newItems = results.filter((item) => item.end_year === i);
      return setItems(newItems);
    } else if (selected === "topiclabels") {
      const newItems = results.filter((item) => item.topic === i);
      return setItems(newItems);
    } else if (selected === "regionlabels") {
      const newItems = results.filter((item) => item.region === i);
      return setItems(newItems);
    } else if (selected === "countrylabels") {
      const newItems = results.filter((item) => item.country === i);
      return setItems(newItems);
    } else if (selected === "citylabels") {
      const newItems = results.filter((item) => item.city === i);
      return setItems(newItems);
    } else if (selected === "sourcelabels") {
      const newItems = results.filter((item) => item.source === i);
      return setItems(newItems);
    } else if (selected === "pestlelabels") {
      const newItems = results.filter((item) => item.pestle === i);
      return setItems(newItems);
    } else if (selected === "swotlabels") {
      const newItems = results.filter((item) => item.swot === i);
      return setItems(newItems);
    } else if (selected === "sectorlabels") {
      const newItems = results.filter((item) => item.sector === i);
      return setItems(newItems);
    }
  };

  // All the cards

  return (
    <div className="flex flex-col mt-180">
      <div className="flex sm:flex-row flex-col mt-20 justify-between">
        <div className="flex flex-col">
          <h2 className="text-gray-700 text-left font-bold text-3xl ms-12">
            Welcome to Dashboard 👋
          </h2>
          <h4 className="text-gray-500 text-left ms-12 mt-2 text-base">
            Check all of the different statistics below
          </h4>
        </div>
        <div className="flex md:flex-row flex-col sm:me-8 md:me-27">
          <select
            id="selects"
            onChange={(e) => setSelected(e.target.value)}
            className="border-2 w-48 align-center mt-12 mx-auto sm:mt-0 border-gray-300 shadow-lg px-4 h-11 items-center bg-gray-50 focus:border-none text-gray-900 text-sm rounded-lg block text-left">
            <option className="pt-3 pb-2" value="none">
              Filters
            </option>
            <option className="py-2" value="regionlabels">
              Filters By Region
            </option>
            <option className="py-2" value="sectorlabels">
              Filters By Sector
            </option>
            <option className="py-2" value="endyearslabel">
              Filters By End Year
            </option>
            <option className="py-2" value="topiclabels">
              Filters By Topic
            </option>
            <option className="py-2" value="countrylabels">
              Filters By Country
            </option>
            <option className="py-2" value="citylabels">
              Filters By City
            </option>
            <option className="py-2" value="swotlabels">
              Filters By SWOT
            </option>
            <option className="py-2" value="pestlelabels">
              Filters By pestle
            </option>
            <option className="pt-2 pb-3" value="sourcelabels">
              Filters By Source
            </option>
          </select>

          <select
            id="select"
            className="md:ms-5 border-2 w-60 align-center mt-12 mx-auto md:mt-0 border-gray-300 shadow-lg px-4 h-11 items-center bg-gray-50 focus:border-none text-gray-900 text-sm rounded-lg block text-left">
            {selected !== "none" ? (
              allFilters[selected].map((item) => (
                <option
                  onClick={() => filterItems(selected, item)}
                  className="py-2"
                  key={item}>
                  {item}
                </option>
              ))
            ) : (
              <option className="py-3" value="none">
                Select a filter first
              </option>
            )}
          </select>
        </div>
      </div>
      <div className="mx-4 mt-20 space-y-12">
        <IntensityCard intensity={intensity} />
        <LikelihoodCard likelihood={likelihood} />
        <RelevanceCard relevance={relevance} />
        <YearsCard
          startyears={startyears}
          endyears={endyears}
          startyearslabel={startyearslabel}
          endyearslabel={endyearslabel}
        />
        <TopicsCard topics={topics} label={topiclabels} />
        <RegionCard region={region} label={regionlabels} />
        <div className="flex sm:flex-row flex-col justify-between">
          <CountryCard country={country} countrylabels={countrylabels} />
          <CityCard city={city} labels={citylabels} />
        </div>
      </div>
      <button
        style={{ display: showGoTop ? "block" : "none" }}
        className="fixed bottom-5 right-5 bg-violet-600 shadow-md rounded-full p-3.5"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
        <ChevronUpIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Dashboard;
