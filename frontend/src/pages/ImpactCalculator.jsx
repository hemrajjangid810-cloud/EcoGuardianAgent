import { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function ImpactCalculator() {

  const [electricity, setElectricity] = useState("");
  const [water, setWater] = useState("");
  const [transport, setTransport] = useState("public");

  const [result, setResult] = useState(null);

  const calculate = async () => {

    const res = await API.post(
      "impact-calculator/",
      {
        electricity,
        water,
        transport
      }
    );

    setResult(res.data);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex justify-center items-center bg-[url(/img/green16.jpg)]">
        <Navbar />
      <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30  p-8 rounded-xl w-full max-w-lg">

        <h1 className="text-3xl text-white mb-6">
          🌍 Sustainability Impact Calculator
        </h1>

        <input
          type="number"
          placeholder="Electricity Usage (kWh)"
          className="w-full p-3 rounded-lg bg-slate-800 text-white"
          onChange={(e) =>
            setElectricity(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Water Usage (Liters)"
          className="w-full p-3 rounded-lg bg-slate-800 text-white mt-4"
          onChange={(e) =>
            setWater(e.target.value)
          }
        />

        <select
          className="w-full p-3 rounded-lg bg-slate-800 text-white mt-4"
          onChange={(e) =>
            setTransport(e.target.value)
          }
        >
          <option value="public">
            Public Transport
          </option>

          <option value="bike">
            Bike
          </option>

          <option value="car">
            Car
          </option>
        </select>

        <button
          onClick={calculate}
          className="bg-green-600 px-5 py-3 rounded-lg text-white w-full mt-4"
        >
          Calculate Impact
        </button>

        {result && (

          <div className="mt-6 bg-slate-800 p-4 rounded">

            <h2 className="text-green-400 text-xl">
              Carbon Score:
              {result.carbon_score}
            </h2>

            <h2 className="text-blue-400 text-xl mt-2">
              Rating:
              {result.rating}
            </h2>

          </div>

        )}

      </div>

    </div>
  );
}

export default ImpactCalculator;