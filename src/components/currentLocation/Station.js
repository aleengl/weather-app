import { Container } from "../styles/Station.styled";
import Icon from "../Icon/Icon";
import sprite_icons from "../../img/sprite_icons.svg";
import {
  style_locationPin,
  style_calendar,
  currentDate,
  hours,
  minutes,
} from "../../constants";

const Station = (props) => {
  return (
    <Container>
      <div>
        <Icon
          file={sprite_icons}
          icon="icon-location-pin"
          style={style_locationPin}
        />
        <span>{props.city}</span>
      </div>
      <div>
        <Icon file={sprite_icons} icon="icon-calendar" style={style_calendar} />
        {props.timezone && (
          <p>
            {currentDate}
            <span>
              {`${(hours + props.timezone / 3600)
                .toString()
                .padStart(2, "0")}:${minutes}`}
            </span>
          </p>
        )}
      </div>
    </Container>
  );
};

export default Station;
