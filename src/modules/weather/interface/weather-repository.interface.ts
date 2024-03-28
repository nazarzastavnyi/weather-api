import { WeatherModelInterface, WeatherInfo } from './weather.interface';

export interface IWeatherRepository {
  create(item: WeatherModelInterface): Promise<WeatherModelInterface>;

  findOne(item: WeatherInfo): Promise<WeatherModelInterface>;

  update(
    id: number,
    item: WeatherModelInterface,
  ): Promise<WeatherModelInterface>;
}

export const IWeatherRepository = Symbol('IWeatherRepository');
