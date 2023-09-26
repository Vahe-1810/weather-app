import { useDispatch, useSelector } from "../redux";

const DayList = () => {
  const dailyWeatherData = useSelector((state) => state.dailyWeatherData);
  const tmpType = useSelector((state) => state.tmpType);
  const currSymbol = tmpType === "imperial" ? "°F" : "°C";
  const tempByType = currSymbol === "°C" ? 1 : 0;
  const dispatch = useDispatch();

  const handleChooseDay = (date: number) => {
    dispatch({ type: "setDay", selectedDay: new Date(date * 1000).getDay() });
  };

  return (
    <div className="days">
      {dailyWeatherData?.list
        .filter((_, i) => i % 8 === 0)
        .map((item) => (
          <div
            className="day-box"
            key={item.dt}
            onClick={() => handleChooseDay(item.dt)}>
            <h3>{item.dt_txt.split(" ")[0]}</h3>
            <div className="day-tmp-info">
              <h1>
                {tempByType
                  ? item.main.temp
                  : (Number(item.main.temp) * (9 / 5) + 32).toFixed(2)}{" "}
                {currSymbol}
              </h1>
              <img
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default DayList;
