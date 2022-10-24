import sprite_symbols from "../../img/sprite_symbols.svg";
import { Container } from "../styles/Condition.styled";
import Icon from "../Icon/Icon";

const style_cloudSun = {
  height: "10rem",
  width: "10rem",
};

const style_cloudRain = {
  height: "3.5rem",
  width: "3.5rem",
};

const Condition = () => {
  return (
    <Container>
      <div>
        <Icon
          file={sprite_symbols}
          icon="icon-cloud-sun"
          style={style_cloudSun}
        />
      </div>
      <p>28°C</p>
      <div>
        <div>
          <Icon
            file={sprite_symbols}
            icon="icon-cloud-rain"
            style={style_cloudRain}
          />
        </div>
        <p>Rainy Storm Clouds</p>
      </div>
    </Container>
  );
};

export default Condition;
