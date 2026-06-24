import { useEffect, useState } from "react";
import API from "../services/api";

function PredictionHistory() {

  const [history, setHistory] = useState([]);

  useEffect(() => {
    API.get("history/")
      .then((res) => setHistory(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30  p-6 rounded-xl">

      <h2 className="text-white text-xl mb-4">
        Recent Predictions
      </h2>

      <table className="w-full text-white">

        <thead>
          <tr>
            <th>Temp</th>
            <th>Humidity</th>
            <th>Risk</th>
          </tr>
        </thead>

        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td>{item.temperature}</td>
              <td>{item.humidity}</td>
              <td>{item.risk_level}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default PredictionHistory;