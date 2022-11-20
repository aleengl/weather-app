import sprite_symbols from "../../img/sprite_symbols.svg";
import { StyledCondition } from "../styles/Condition.styled";
import { style_cloudSun } from "../../constants";
import Icon from "../Icon/Icon";

const Condition = (props) => {
  return (
    <StyledCondition>
      <div>
        {props.icon ? (
          <img
            src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`}
            alt="icon of the weather condition"
          />
        ) : (
          <Icon
            file={sprite_symbols}
            icon="icon-cloud-sun"
            style={style_cloudSun}
          />
        )}
      </div>
      <p>{props.temperature ? `${props.temperature.toFixed(1)}°C` : "15°C"}</p>
      <span>{props.description ? props.description : "sun"}</span>
    </StyledCondition>
  );
};

export default Condition;
