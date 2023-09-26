import { IWeatherData } from "../../types/types";

const initialState: IWeatherData = {
  defaultCity: "Yerevan",
  currWeatherData: null,
  dailyWeatherData: null,
  tmpType: "metric",
  isFound: true,
  selectedDay: new Date().getDay(),
};

export const weatherReducer = (
  state = initialState,
  action: any
): IWeatherData => {
  switch (action.type) {
    case "getDefault": {
      return {
        ...state,
        currWeatherData: action.data,
      };
    }
    case "setTmpType": {
      return {
        ...state,
        tmpType: action.tmpType,
      };
    }
    case "getDailyData": {
      return {
        ...state,
        dailyWeatherData: action.data,
      };
    }
    case "cityNotFound": {
      return {
        ...state,
        isFound: !state.isFound,
      };
    }
    case "setDay": {
      return {
        ...state,
        selectedDay: action.selectedDay,
      };
    }
    default:
      return state;
  }
};
