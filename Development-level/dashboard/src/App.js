import axios from "axios";
import "flowbite";
import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard.js";
import Footer from "./components/Footer.js";
import Navbar from "./components/Navbar.js";
import { initFlowbite } from "flowbite";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    initFlowbite();
    loadEach();
  }, []);

  const loadEach = async () => {
    const data = await axios.get("http://localhost:8080/api/v1/dashboard");
    const res = data.data;
    setResults(res);
  };

  return (
    <div className="text-center">
      <Navbar />
      <Dashboard results={results} />
      <Footer />
    </div>
  );
}

export default App;
