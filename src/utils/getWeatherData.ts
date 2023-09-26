import { Dispatch } from "redux";
import { CITY_NOT_FOUND } from "./constants";

type TypeGetWeatherData = (city: string, dispatch: Dispatch<any>) => void;

export const getWeatherData: TypeGetWeatherData = async (city, dispatch) => {
  try {
    const url = `${process.env.REACT_APP_BASE_URL}weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`;
    const resp = await fetch(url);
    const result = await resp.json();

    if (result.cod === CITY_NOT_FOUND)
      return dispatch({ type: "cityNotFound" });

    dispatch({
      type: "getDefault",
      data: result,
    });
  } catch (e) {
    console.log(e);
  }
};
