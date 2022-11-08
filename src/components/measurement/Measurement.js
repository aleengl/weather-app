import { MeasureContainer } from "../styles/Measurement.styled";
import TemperatureChart from "../charts/TemperatureChart";
import PressureChart from "../charts/PressureChart";
import HumidityChart from "../charts/HumidityChart";
import RainChart from "../charts/RainChart";
import WindChart from "../charts/WindChart";
import { ChartContainer } from "../styles/ChartContainer.styled";

// pass a function to each of the Chart components which returns an array of objects
// Data structure needed
// TODO: want to start the labels at the xAxis with the next 3hour forecast based on the local time

const testingFunction = (data, parameter) => {
  let chartData = [];

  switch (parameter) {
    case "temp":
      data.forEach((obj) => {
        chartData.push({
          time: new Date(obj.dt * 1000),
          temp: obj.main.temp,
          temp_min: obj.main.temp_min,
          temp_max: obj.main.temp_max,
        });
      });
      break;
    case "pressure":
      data.forEach((obj) => {
        chartData.push({
          time: obj.dt,
          pressure: obj.main.pressure,
          grnd_level: obj.main.grnd_level,
          sea_level: obj.main.sea_level,
        });
      });
      break;
    case "humidity":
      data.forEach((obj) => {
        chartData.push({
          time: obj.dt,
          humidity: obj.main.humidity,
        });
      });
      break;
    case "rain":
      data.forEach((obj) => {
        chartData.push({
          time: obj.dt,
          rain: obj.rain["3h"],
        });
      });
      break;
    case "wind":
      data.forEach((obj) => {
        chartData.push({
          time: obj.dt,
          speed: parseFloat((obj.wind.speed * 3.6).toFixed(1)),
          gust: parseFloat((obj.wind.gust * 3.6).toFixed(1)),
          deg: obj.wind.deg,
        });
      });
      break;
    default:
      break;
  }

  return chartData;
};

const Measurement = (props) => {
  console.log(props.data);

  const plotData = testingFunction(props.data, "temp");

  return (
    <MeasureContainer>
      <ChartContainer>
        <HumidityChart data={props.data} test={plotData} />
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
