export type TypeTmp = "metric" | "imperial";

interface IDailyData {
  list: {
    main: { temp: string };
    dt_txt: string;
    dt: number;
    weather: TypeWeather[];
  }[];
}

export interface IWeatherData {
  defaultCity: "Yerevan";
  currWeatherData: IData | null;
  tmpType: TypeTmp;
  dailyWeatherData: IDailyData | null;
  isFound: boolean;
  selectedDay: number;
}

type TypeWeather = {
  icon: string;
  main: string;
};

export interface IData {
  name: string;
  main: {
    temp: string;
  };
  weather: TypeWeather[];
  cod: number;
}
