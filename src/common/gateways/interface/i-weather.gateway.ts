export interface IWeatherData {
  lat: number;
  lon: number;
  part: string;
}

export interface IWeatherGateway {
  getWeather(weatherData: IWeatherData): Promise<any>;
}
export const IWeatherGateway = Symbol('IWeatherGateway');
