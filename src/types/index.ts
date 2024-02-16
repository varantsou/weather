export enum Units {
  METRIC = "metric",
  IMPERIAL = "imperial",
}

export interface UseWeatherProps {
  city: string;
  units?: Units;
}

export interface WeatherData {
  name: string;
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    deg: number;
    speed: number;
  };
}
