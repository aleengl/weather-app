import { ResponsiveContainer, LineChart, Line } from "recharts";
import StyledYAxis from "./chartElements/StyledYAxis";
import StyledXAxis from "./chartElements/StyledXAxis";
import StyledTooltip from "./chartElements/StyledTooltip";
import StyledLegend from "./chartElements/StyledLegend";
import { StyledCartesianGrid } from "../styles/Chart.styled";

const WindChart = (props) => {
  return (
    <ResponsiveContainer width="95%">
      <div>
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
          {StyledXAxis(props.data[0].theme)}
          {StyledYAxis(props.data[0].theme, "Wind speed (km/h)", 65)}
          {StyledTooltip("km/h")}
          {StyledLegend()}
        </LineChart>
        <LineChart width={900} height={200} data={props.data} syncId="1">
          <Line
            type="monotone"
            dataKey="deg"
            stroke="#94D8F0"
            strokeWidth={3}
          />
          <StyledCartesianGrid strokeDasharray="5 5" />
          {StyledXAxis(props.data[0].theme)}
          {StyledYAxis(props.data[0].theme, "Wind direction (deg)", 65)}
          {StyledTooltip("°")}
          {StyledLegend()}
        </LineChart>
      </div>
    </ResponsiveContainer>
  );
};

export default WindChart;
