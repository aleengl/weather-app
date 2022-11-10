import { Container } from "../styles/Station.styled";
import Icon from "../Icon/Icon";
import sprite_icons from "../../img/sprite_icons.svg";
import { style_locationPin, style_calendar } from "../../constants";
import { getLocalTime } from "../api/api";
import { useEffect, useState } from "react";

const Station = (props) => {
  const [time, getTime] = useState();

  useEffect(() => {
    if (props.city) {
      getLocalTime(props.city, getTime);
    }
  }, [props.city]);

  // optional chaining => only if time exists => read datetime property
  // otherwise undefined will be returned
  const dateIndex = time?.datetime.indexOf(" ");

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
        {time && (
          <p>
            {time.datetime.substring(0, dateIndex)}
            <span>
              {time.datetime.substring(dateIndex, time.datetime.length - 3)}
            </span>
          </p>
        )}
      </div>
    </Container>
  );
};

export default Station;
