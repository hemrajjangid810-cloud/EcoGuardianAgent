import { useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Prediction() {
  const [risk, setRisk] = useState("");
  const [recommendation, setRecommendation] = useState("");


  const [formData, setFormData] = useState({
    temperature: "",
    humidity: "",
    rainfall: "",
    wind_speed: "",
    water_level: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await API.post("predict-risk/", formData);

    setRisk(res.data.risk);
setRecommendation(res.data.recommendation);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center bg-[url(/img/green4.png)]">
      <Navbar />

      <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30  p-8 rounded-2xl shadow-xl w-full max-w-md">

        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          🌍 EcoGuardian AI
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            name="temperature"
            placeholder="Temperature"
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
            onChange={handleChange}
          />

          <input
            name="humidity"
            placeholder="Humidity"
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
            onChange={handleChange}
          />

          <input
            name="rainfall"
            placeholder="Rainfall"
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
            onChange={handleChange}
          />

          <input
            name="wind_speed"
            placeholder="Wind Speed"
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
            onChange={handleChange}
          />

          <input
            name="water_level"
            placeholder="Water Level"
            className="w-full p-3 rounded-lg bg-slate-800 text-white"
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg"
          >
            Predict Risk
          </button>

        </form>

        {risk && (
  <div className="mt-6 text-center">

    <h2 className="text-2xl font-bold text-green-400">
      Risk Level: {risk}
    </h2>

    <div className="mt-4 bg-slate-800 p-4 rounded-lg">

      <h3 className="text-white font-semibold">
        Recommendation
      </h3>

      <p className="text-gray-300 mt-2">
        {recommendation}
      </p>

    </div>

  </div>
)}
<Link
  to="/dashboard"
  className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg"
>
  Open Dashboard
</Link>


     {/* Ai Assistant */}

     <Link
  to="/chatbot"
  className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg"
>
  🤖 Open AI Assistant
</Link>

      </div>

    </div>
  );
}

export default Prediction;