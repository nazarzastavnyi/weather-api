import { WeatherModelInterface, WeatherInfo } from './weather.interface';

export interface IWeatherRepository {
  create(item: WeatherModelInterface): Promise<WeatherModelInterface>;

  findOne(item: WeatherInfo): Promise<WeatherModelInterface>;
}

export const IWeatherRepository = Symbol('IWeatherRepository');
