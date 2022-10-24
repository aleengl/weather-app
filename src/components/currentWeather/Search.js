import { Container } from "../styles/Search.styled";
import Icon from "../Icon/Icon";
import sprite_icons from "../../img/sprite_icons.svg";
import { style_search } from "../../constants";

const Search = () => {
  return (
    <Container>
      <form>
        <p>Select a country</p>
        <div>
          <input type="text" placeholder="Enter the city here..." />
          <Icon
            file={sprite_icons}
            icon="icon-magnifying-glass"
            style={style_search}
          />
        </div>
        <div>
          <label htmlFor="parameter">Parameter:</label>
          <select name="parameter" id="parameter">
            <option value="Temperature">Temperature</option>
            <option value="Pressure">Pressure</option>
            <option value="Humidity">Humidity</option>
            <option value="Wind">Wind</option>
            <option value="Visibility">Visibility</option>
            <option value="Rain">Rain</option>
          </select>
        </div>

        <div>
          <label htmlFor="start">Start date:</label>
          <input
            type="date"
            id="start"
            defaultValue="2022-10-19"
            min="2022-10-24"
          />
        </div>
        <div>
          <label htmlFor="end">End date:</label>
          <input type="date" id="end" defaultValue="2022-10-24" />
        </div>
        <button>Select</button>
      </form>
    </Container>
  );
};

export default Search;
