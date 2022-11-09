import { MeasureContainer } from "../styles/Measurement.styled";
import TemperatureChart from "../charts/TemperatureChart";
import PressureChart from "../charts/PressureChart";
import HumidityChart from "../charts/HumidityChart";
import RainChart from "../charts/RainChart";
import WindChart from "../charts/WindChart";
import { ChartContainer } from "../styles/ChartContainer.styled";

// TODO: fix the time for labels of the xAxis

const testingFunction = (data, timezone, parameter) => {
  return data.map((obj) => {
    return {
      time: new Date((obj.dt + timezone + 3600) * 1000).toLocaleString(
        "de-DE",
        {
          hour: "numeric",
          minute: "numeric",
        }
      ),
      ...(parameter === "temp" && {
        temp: parseFloat(obj.main.temp.toFixed(1)),
        temp_min: parseFloat(obj.main.temp_min.toFixed(1)),
        temp_max: parseFloat(obj.main.temp_max.toFixed(1)),
      }),
      ...(parameter === "pressure" && {
        pressure: obj.main.pressure,
        grnd_level: obj.main.grnd_level,
        sea_level: obj.main.sea_level,
      }),
      ...(parameter === "humidity" && { humidity: obj.main.humidity }),
      ...(parameter === "rain" && {
        rain: parseFloat(obj.rain["3h"].toFixed(1)),
      }),
      ...(parameter === "wind" && {
        speed: parseFloat((obj.wind.speed * 3.6).toFixed(1)),
        gust: parseFloat((obj.wind.gust * 3.6).toFixed(1)),
        deg: obj.wind.deg,
      }),
    };
  });
};

const Measurement = (props) => {
  console.log(props.data.timestamps);

  const plotData = testingFunction(
    props.data.timestamps,
    props.data.timezone,
    "temp"
  );

  return (
    <MeasureContainer>
      <ChartContainer>
        <TemperatureChart data={plotData} />
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
