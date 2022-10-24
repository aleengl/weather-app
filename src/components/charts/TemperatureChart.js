import { ChartContainer } from "../styles/TemperatureChart.styled";
import { renderLineChart } from "../../constants";

const TemperatureChart = () => {
  return <ChartContainer>{renderLineChart}</ChartContainer>;
};

export default TemperatureChart;
