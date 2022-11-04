import { MeasureContainer } from "../styles/Measurement.styled";
import TemperatureChart from "../charts/TemperatureChart";
import PressureChart from "../charts/PressureChart";
import HumidityChart from "../charts/HumidityChart";
import RainChart from "../charts/RainChart";
import WindChart from "../charts/WindChart";
import { ChartContainer } from "../styles/ChartContainer.styled";

const Measurement = () => {
  return (
    <MeasureContainer>
      <ChartContainer>
        <HumidityChart />
      </ChartContainer>
      <div>
        <label htmlFor="parameter">Parameters</label>
        <br />
        <select name="parameter" id="parameter">
          <option value="Temperature">Temperature</option>
          <option value="Pressure">Pressure</option>
          <option value="Wind">Wind</option>
          <option value="Visibility">Humidity</option>
          <option value="Rain">Rain</option>
        </select>
      </div>
    </MeasureContainer>
  );
};

export default Measurement;
