import { ResponsiveContainer, LineChart, Line } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";

const WindChart = (props) => {
  console.log(props.data);

  const yAxis_speed = axis("Wind speed (km/h)", 80);
  const yAxis_direction = axis("Wind direction (deg)", 80);
  const tooltip_speed = tip("km/h");
  const tooltip_direction = tip("°");

  return (
    <ResponsiveContainer width="95%">
      <div>
        <LineChart width={900} height={200} data={props.data} syncId="1">
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
        <LineChart width={900} height={200} data={props.data} syncId="1">
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
