import { Container } from "../styles/Forecast.styled";
import sprite_symbols from "../../img/sprite_symbols.svg";
import Icon from "../Icon/Icon";
import { style_forecast } from "../../constants";

const Forecast = () => {
  return (
    <Container>
      <p>3-hourly Forecast</p>
      <div>
        <div>
          <Icon
            file={sprite_symbols}
            icon="icon-cloud-moon-lightning"
            style={style_forecast}
          />
          <p>29°C</p>
          <p>15:00 (+3h)</p>
          <p>Monday</p>
        </div>
        <div>
          <Icon
            file={sprite_symbols}
            icon="icon-cloud-moon-lightning"
            style={style_forecast}
          />
          <p>29°C</p>
          <p>18:00 (+6h)</p>
          <p>Monday</p>
        </div>
        <div>
          <Icon
            file={sprite_symbols}
            icon="icon-cloud-moon-lightning"
            style={style_forecast}
          />
          <p>29°C</p>
          <p>21:00 (+9h)</p>
          <p>Monday</p>
        </div>
        <div>
          <Icon
            file={sprite_symbols}
            icon="icon-cloud-moon-lightning"
            style={style_forecast}
          />
          <p>29°C</p>
          <p>00:00 (+12h)</p>
          <p>Monday</p>
        </div>
        <div>
          <Icon
            file={sprite_symbols}
            icon="icon-cloud-moon-lightning"
            style={style_forecast}
          />
          <p>29°C</p>
          <p>03:00 (+15h)</p>
          <p>Monday</p>
        </div>
        <div>
          <Icon
            file={sprite_symbols}
            icon="icon-cloud-moon-lightning"
            style={style_forecast}
          />
          <p>29°C</p>
          <p>06:00 (+18h)</p>
          <p>Monday</p>
        </div>
      </div>
    </Container>
  );
};

export default Forecast;
