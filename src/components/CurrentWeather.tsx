import { useSelector } from "../redux";
import { IData } from "../types/types";
import NotFoundModal from "./NotFoundModal";

const CurrentWeather = () => {
  const data = useSelector((state) => state.currWeatherData) as IData;
  const currSymbol =
    useSelector((state) => state.tmpType) === "imperial" ? "°F" : "°C";

  const number = Number(data.main?.temp);
  const tempByType =
    currSymbol === "°C" ? number : (number * (9 / 5) + 32).toFixed(2);

  return (
    <div className="current-time">
      <div className="weather-title">
        <h2>{data.name}</h2>
        <h1>
          {tempByType}
          {currSymbol}
        </h1>
      </div>
      <img
        src={`https://openweathermap.org/img/wn/${data.weather?.[0].icon}@4x.png`}
      />
      <h2>{data.weather?.[0].main}</h2>
    </div>
  );
};

export default CurrentWeather;
