import { ResponsiveContainer, LineChart, Line } from "recharts";
import StyledYAxis from "./chartElements/StyledYAxis";
import StyledXAxis from "./chartElements/StyledXAxis";
import StyledTooltip from "./chartElements/StyledTooltip";
import StyledLegend from "./chartElements/StyledLegend";
import { StyledCartesianGrid } from "../styles/Chart.styled";

const WindChart = (props) => {
  return (
    <>
      <ResponsiveContainer width="95%" height={220}>
        <LineChart width={900} height={200} data={props.data} syncId="1">
          <Line
            type="monotone"
            dataKey="speed"
            stroke="#B5D684"
            strokeWidth={3}
          />
          <Line
            type="monotone"
            dataKey="gust"
            stroke="#AFD6C6"
            strokeWidth={3}
          />
          <StyledCartesianGrid strokeDasharray="5 5" />
          {StyledXAxis(props.theme)}
          {StyledYAxis(props.theme, "Wind speed (km/h)", 80)}
          {StyledTooltip("km/h", props.theme)}
          {StyledLegend()}
        </LineChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="95%" height={220}>
        <LineChart width={900} height={200} data={props.data} syncId="1">
          <Line
            type="monotone"
            dataKey="deg"
            stroke="#94D8F0"
            strokeWidth={3}
          />
          <StyledCartesianGrid strokeDasharray="5 5" />
          {StyledXAxis(props.theme)}
          {StyledYAxis(props.theme, "Wind direction (deg)", 80)}
          {StyledTooltip("°", props.theme)}
          {StyledLegend()}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default WindChart;
