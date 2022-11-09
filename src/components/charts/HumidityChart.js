import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { cartesianGrid, xAxis, axis, tip, legend } from "../../constants";

const HumidityChart = (props) => {
  console.log(props.data);

  const yAxis = axis("Humidity [%]", 55);
  const tooltip = tip("%");

  return (
    <ResponsiveContainer width="95%">
      <AreaChart height={1000} width={500} data={props.data}>
        <defs>
          <linearGradient>
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        {cartesianGrid}
        {xAxis}
        {yAxis}
        {tooltip}
        {legend}
        <Area
          type="monotone"
          dataKey="humidity"
          stroke="#82ca9d"
          fill="rgba(91, 141, 110, .5)"
          fillOpacity={1}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default HumidityChart;
