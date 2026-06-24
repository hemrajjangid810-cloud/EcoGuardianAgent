import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  {
    risk: "Flood",
    value: 85,
  },
  {
    risk: "Drought",
    value: 60,
  },
  {
    risk: "Heatwave",
    value: 35,
  },
];

function RiskChart() {
  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30  p-6 rounded-xl shadow-lg">

      <h2 className="text-white text-xl mb-4">
        Climate Risk Analysis
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="risk" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" />
        </BarChart>
      </ResponsiveContainer>

    </div>
  );
}

export default RiskChart;