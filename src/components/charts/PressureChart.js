import { ResponsiveContainer, LineChart, Line } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";

const PressureChart = () => {
  const pressureData = [
    { name: "12:00", pressure: 290, seaLevel: 220, groundLevel: 300 },
    { name: "15:00", pressure: 320, seaLevel: 200, groundLevel: 350 },
    { name: "18:00", pressure: 260, seaLevel: 170, groundLevel: 400 },
    { name: "21:00", pressure: 300, seaLevel: 150, groundLevel: 330 },
    { name: "00:00", pressure: 330, seaLevel: 210, groundLevel: 310 },
  ];

  const yAxis = axis("Pressure [hPa]", 65);
  const tooltip = tip("hPa");

  return (
    <ResponsiveContainer width="95%">
      <LineChart width={1000} height={500} data={pressureData}>
        <Line
          type="monotone"
          dataKey="pressure"
          strokeWidth={3}
          stroke="#c2d0e1"
        />
        <Line
          type="monotone"
          dataKey="seaLevel"
          strokeWidth={3}
          stroke="#e1c2d0"
        />
        <Line
          type="monotone"
          dataKey="groundLevel"
          strokeWidth={3}
          stroke="#d0e1c2"
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

export default PressureChart;
