import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", temp: 32 },
  { day: "Tue", temp: 35 },
  { day: "Wed", temp: 37 },
  { day: "Thu", temp: 34 },
  { day: "Fri", temp: 38 },
];

function TemperatureChart() {
  return (
    <div className="bg-slate-900/40 backdrop-blur-md border border-cyan-500/30  p-6 rounded-xl">

      <h2 className="text-white text-xl mb-4">
        Temperature Trend
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
          />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}

export default TemperatureChart;