import { ResponsiveContainer, LineChart, Line } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";

const PressureChart = (props) => {
  console.log(props.data);

  const yAxis = axis("Pressure (hPa)", 55);
  const tooltip = tip("hPa");

  return (
    <ResponsiveContainer width="95%">
      <LineChart width={1000} height={500} data={props.data}>
        <Line
          type="monotone"
          dataKey="sea_level"
          strokeWidth={3}
          stroke="#C6D0D6"
        />
        <Line
          type="monotone"
          dataKey="grnd_level"
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
