import { ResponsiveContainer, LineChart, Line } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";

const TemperatureChart = () => {
  const tempData = [
    { name: "12:00", temp: 290, tempMin: 220, tempMax: 300 },
    { name: "15:00", temp: 330, tempMin: 260, tempMax: 350 },
    { name: "18:00", temp: 360, tempMin: 240, tempMax: 320 },
    { name: "21:00", temp: 250, tempMin: 300, tempMax: 380 },
    { name: "00:00", temp: 210, tempMin: 320, tempMax: 390 },
  ];

  const yAxis = axis("°C", 20);
  const tooltip = tip("°C");

  return (
    <ResponsiveContainer width="95%">
      <LineChart width={1000} height={500} data={tempData}>
        <Line type="monotone" dataKey="temp" strokeWidth={3} stroke="#ff4d4d" />
        <Line
          type="monotone"
          dataKey="tempMin"
          strokeWidth={3}
          stroke="#8080ff"
        />
        <Line
          type="monotone"
          dataKey="tempMax"
          strokeWidth={3}
          stroke="#ff0000"
        />
        {cartesianGrid}
        {xAxis}
        {yAxis}
        {tooltip}
        {legend}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TemperatureChart;
