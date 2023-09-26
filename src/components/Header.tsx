import { useState } from "react";
import { useDispatch, useSelector } from "../redux";
import { TypeTmp } from "../types/types";
import { getWeatherData } from "../utils/getWeatherData";
import { getDailyWeatherData } from "../utils/getDailyWeatherData";

const Header = () => {
  const tmpType = useSelector((state) => state.tmpType);
  const dispatch = useDispatch();
  const [cityValue, setCityValue] = useState("");

  const toggleChange = (tmpType: TypeTmp) => {
    dispatch({ type: "setTmpType", tmpType });
  };

  const handleSearch = () => {
    if (!cityValue) return;
    getWeatherData(cityValue, dispatch);
    getDailyWeatherData(cityValue, dispatch);
  };

  return (
    <header>
      <div className="title">WEATHER</div>
      <div className="search-actions">
        <input
          type="text"
          className="search-input"
          value={cityValue}
          onChange={(e) => setCityValue(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="temperature-type">
        <div>
          <input
            type="radio"
            value="F"
            checked={tmpType === "imperial"}
            onChange={() => toggleChange("imperial")}
          />
          <label htmlFor="F">°F</label>
        </div>
        <div>
          <input
            type="radio"
            value="C"
            checked={tmpType === "metric"}
            onChange={() => toggleChange("metric")}
          />
          <label htmlFor="C">°C</label>
        </div>
      </div>
    </header>
  );
};

export default Header;
