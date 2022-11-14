import { ResponsiveContainer, LineChart, Line } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";

const TemperatureChart = (props) => {
  console.log(props.data);

  const yAxis = axis("Temperature (°C)", 65);
  const tooltip = tip("°C");

  return (
    <ResponsiveContainer width="95%">
      <LineChart width={1000} height={500} data={props.data}>
        <Line type="monotone" dataKey="temp" strokeWidth={3} stroke="#ff4d4d" />
        <Line
          type="monotone"
          dataKey="temp_min"
          strokeWidth={3}
          stroke="#8080ff"
        />
        <Line
          type="monotone"
          dataKey="temp_max"
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
