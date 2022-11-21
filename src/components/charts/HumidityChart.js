import { ResponsiveContainer, AreaChart, Area } from "recharts";
import { StyledCartesianGrid } from "../styles/Chart.styled";
import StyledYAxis from "./chartElements/StyledYAxis";
import StyledXAxis from "./chartElements/StyledXAxis";
import StyledTooltip from "./chartElements/StyledTooltip";
import StyledLegend from "./chartElements/StyledLegend";

const HumidityChart = (props) => {
  return (
    <ResponsiveContainer width="95%">
      <AreaChart height={1000} width={500} data={props.data}>
        <defs>
          <linearGradient>
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
        </defs>
        <StyledCartesianGrid strokeDasharray="5 5" />
        {StyledXAxis(props.theme)}
        {StyledYAxis(props.theme, "Humidity (%)", 50)}
        {StyledTooltip("%")}
        {StyledLegend()}
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
