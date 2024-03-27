import { Inject, Injectable } from '@nestjs/common';
import { NotFoundException } from '@common/exceptions';
import { IWeatherRepository } from './interface/weather-repository.interface';
import {
  WeatherInfo,
  WeatherModelInterface,
} from './interface/weather.interface';

@Injectable()
export class WeatherService {
  constructor(
    @Inject(IWeatherRepository) private weatherRepository: IWeatherRepository,
  ) {}

  async saveWeather(info: WeatherInfo): Promise<boolean> {
    const record: WeatherModelInterface =
      await this.weatherRepository.findOne(info);

    if (!record) {
      const model: WeatherModelInterface = {
        log: info.log,
        lat: info.lat,
        part: info.part,
        weather: {
          sunrise: 1684926645,
          sunset: 1684977332,
          temp: 292.55,
          feels_like: 292.87,
          pressure: 1014,
          uvi: 0.16,
          wind_speed: 3.13,
        },
      };
      await this.weatherRepository.create(model);
      return true;
    }
  }

  async getWeather(info: WeatherInfo): Promise<WeatherModelInterface> {
    const record: WeatherModelInterface =
      await this.weatherRepository.findOne(info);

    if (!record) {
      throw new NotFoundException(`Wheather data doesn't exist`);
    }

    return record;
  }
}
