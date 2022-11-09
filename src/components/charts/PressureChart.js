import { ResponsiveContainer, LineChart, Line } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";

const PressureChart = (props) => {
  console.log(props.data);

  const yAxis = axis("Pressure [hPa]", 65);
  const tooltip = tip("hPa");

  return (
    <ResponsiveContainer width="95%">
      <LineChart width={1000} height={500} data={props.data}>
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
