import { ResponsiveContainer, LineChart, Line } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";

const WindChart = () => {
  const windData = [
    { name: "12:00", speed: 10, gust: 35, deg: 10 },
    { name: "15:00", speed: 30, gust: 55, deg: 330 },
    { name: "18:00", speed: 5, gust: 8, deg: 214 },
    { name: "21:00", speed: 60, gust: 110, deg: 150 },
    { name: "00:00", speed: 90, gust: 130, deg: 85 },
  ];

  const yAxis_speed = axis("[km/h]", 55);
  const yAxis_direction = axis("[deg]", 55);
  const tooltip_speed = tip("km/h");
  const tooltip_direction = tip("°");

  return (
    <ResponsiveContainer width="95%">
      <div>
        <LineChart width={900} height={200} data={windData} syncId="1">
          <Line
            type="monotone"
            dataKey="speed"
            stroke="#bfd6d9"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="gust"
            stroke="#94a6a8"
            strokeWidth={3}
          />
          {cartesianGrid}
          {xAxis}
          {yAxis_speed}
          {tooltip_speed}
          {legend}
        </LineChart>
        <LineChart width={900} height={200} data={windData} syncId="1">
          <Line
            type="monotone"
            dataKey="deg"
            stroke="#cccccc"
            strokeWidth={3}
          />
          {cartesianGrid}
          {xAxis}
          {yAxis_direction}
          {tooltip_direction}
          {legend}
        </LineChart>
      </div>
    </ResponsiveContainer>
  );
};

export default WindChart;
