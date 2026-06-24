// import { FaExclamationTriangle, FaTint, FaSun } from "react-icons/fa";
import RiskChart from "../components/RiskChart";
import TemperatureChart from "../components/TemperatureChart";

import PredictionHistory from "../components/PredictionHistory";

import SustainabilityScore from "../components/SustainabilityScore";

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function Dashboard() {
  const riskData = [
    { name: "High Risk", value: 25 },
    { name: "Medium Risk", value: 45 },
    { name: "Low Risk", value: 30 },
  ];

  const COLORS = ["#ef4444", "#facc15", "#22c55e"];
  return (
    // <div className="min-h-screen bg-slate-950 p-8">
    <div className="min-h-screen bg-cover bg-center bg-fixed p-8 bg-[url(/img/green3.png)]">
      <Navbar />

      <h1 className="
text-5xl
font-bold
text-cyan-300
mb-8
mt-12
drop-shadow-[0_0_15px_#22d3ee]
">
        📊 Climate Dashboard
      </h1>
      <div className="flex justify-center my-10">

  <div
    className="
    w-72
    h-72
    rounded-full
    border-4
    border-cyan-400
    animate-pulse
    shadow-[0_0_80px_#22d3ee]
    bg-[url(/favicon.svg)]
    "
  />

</div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">

  <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6">

    <h2 className="text-cyan-300 text-sm">
      GLOBAL TEMP
    </h2>

    <p className="text-5xl text-green-400 font-bold">
      1.2°C
    </p>

    <p className="text-gray-300 mt-2">
      vs previous year
    </p>

  </div>

  <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6">

    <h2 className="text-cyan-300 text-sm">
      CO₂ LEVEL
    </h2>

    <p className="text-5xl text-green-400 font-bold">
      417 ppm
    </p>

    <p className="text-gray-300 mt-2">
      vs last month
    </p>

  </div>

  <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6">

    <h2 className="text-cyan-300 text-sm">
      WATER LEVEL
    </h2>

    <p className="text-5xl text-cyan-400 font-bold">
      68%
    </p>

    <p className="text-gray-300 mt-2">
      vs last month
    </p>

  </div>

</div>

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30  rounded-xl p-6 shadow-lg">
          <FaExclamationTriangle className="text-red-500 text-4xl mb-3" />
          <h2 className="text-white text-xl">Flood Risk</h2>
          <p className="text-red-400 text-3xl font-bold">High</p>
        </div>

        <div
          className="bg-slate-900/40
backdrop-blur-md
border
border-cyan-500/30 rounded-xl p-6 shadow-lg"
        >
          <FaTint className="text-blue-500 text-4xl mb-3" />
          <h2 className="text-white text-xl">Drought Risk</h2>
          <p className="text-yellow-400 text-3xl font-bold">Medium</p>
        </div>

        <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30 rounded-xl p-6 shadow-lg">
          <FaSun className="text-yellow-500 text-4xl mb-3" />
          <h2 className="text-white text-xl">Heatwave Risk</h2>
          <p className="text-green-400 text-3xl font-bold">Low</p>
        </div>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <RiskChart />

        <TemperatureChart />
      </div>

      <div className="mt-8">
        <PredictionHistory />
      </div>

      <div className="mt-8">
        <SustainabilityScore />
      </div>
      <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30  rounded-xl p-6 mt-8">
        <h2 className="text-white text-xl mb-4">Risk Distribution</h2>

        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie data={riskData} dataKey="value" outerRadius={100} label>
              {riskData.map((entry, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>

            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Ai Assistant */}
      <div className="flex flex-wrap gap-4 mt-8">
        <Link
          to="/chatbot"
          className="bg-purple-500
shadow-[0_0_20px_#a855f7] px-5 py-3  rounded-lg text-white"
        >
          🤖 Open AI Assistant
        </Link>

        <Link
          to="/pdf-analyzer"
          className="bg-purple-500
shadow-[0_0_20px_#a855f7] px-5 py-3 rounded-lg text-white"
        >
          📄 PDF Analyzer
        </Link>
        <Link
          to="/impact-calculator"
          className="bg-yellow-600 px-5 py-3 rounded-lg text-white"
        >
          🌍 Impact Calculator
        </Link>

        <Link
          to="/weather"
          className="bg-cyan-600 px-5 py-3 rounded-lg text-white"
        >
          🌦 Weather
        </Link>
      </div>

      {/* <div className="bg-slate-900 rounded-xl p-6">

  <h2 className="text-white text-xl">
    Sustainability Score
  </h2>

  <div className="mt-4">

    <p className="text-green-400">
      Climate Preparedness: 82%
    </p>

    <p className="text-blue-400">
      Water Awareness: 76%
    </p>

    <p className="text-yellow-400">
      Overall Sustainability: 79%
    </p>

  </div>

</div> */}
    </div>
  );
}

export default Dashboard;
