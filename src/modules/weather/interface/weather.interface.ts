export interface APIResponseInterface {
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  uvi: number;
  wind_speed: number;
}

export interface WeatherModelInterface {
  id?: number;
  lat: number;
  log: number;
  part: string;
  weather: APIResponseInterface;
  createdAt?: string;
  updatedAt?: string;
}

export type WeatherInfo = {
  lat: number;
  log: number;
  part: string;
};
