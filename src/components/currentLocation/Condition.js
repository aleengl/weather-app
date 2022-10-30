import sprite_symbols from "../../img/sprite_symbols.svg";
import { ConditionContainer } from "../styles/Condition.styled";
import { style_cloudRain, style_cloudSun } from "../../constants";
import Icon from "../Icon/Icon";

const Condition = () => {
  return (
    <ConditionContainer>
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
    </ConditionContainer>
  );
};

export default Condition;
