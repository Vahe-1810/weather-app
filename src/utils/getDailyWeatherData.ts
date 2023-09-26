import { Dispatch } from "redux";
import { CITY_NOT_FOUND } from "./constants";

type TypeGetDailyWeatherData = (city: string, dispatch: Dispatch<any>) => void;

export const getDailyWeatherData: TypeGetDailyWeatherData = async (
  city,
  dispatch
) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}forecast?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    const resp = await fetch(url);
    const result = await resp.json();

    if (result.cod === CITY_NOT_FOUND) return;

    dispatch({
      type: "getDailyData",
      data: result,
    });
  } catch (e) {
    console.error(e);
  }
};
