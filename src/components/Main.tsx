import { useSelector } from "../redux";
import CurrentWeather from "./CurrentWeather";
import DailyWeather from "./DailyWeather";
import DayList from "./DayList";

const Main = () => {
  const hasData = useSelector((state) => !!state.currWeatherData);

  if (!hasData) return <h1>Loading...</h1>;

  return (
    <main>
      <div className="selected-day">
        <CurrentWeather />
        <DailyWeather />
      </div>
      <DayList />
    </main>
  );
};

export default Main;
