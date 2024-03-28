import { Inject, Injectable } from '@nestjs/common';
import { NotFoundException } from '@common/exceptions';
import { IWeatherRepository } from './interface/weather-repository.interface';
import {
  WeatherInfo,
  WeatherModelInterface,
} from './interface/weather.interface';
import { IWeatherGateway } from '@common/gateways/interface/i-weather.gateway';

@Injectable()
export class WeatherService {
  constructor(
    @Inject(IWeatherRepository) private weatherRepository: IWeatherRepository,
    @Inject(IWeatherGateway)
    private weatherGateway: IWeatherGateway,
  ) {}

  async saveOrUpdateWeather(info: WeatherInfo): Promise<boolean> {
    const record: WeatherModelInterface =
      await this.weatherRepository.findOne(info);

    const weather = await this.weatherGateway.getWeather(info);
    const model: WeatherModelInterface = {
      lon: info.lon,
      lat: info.lat,
      part: info.part,
      weather,
    };
    if (!record) {
      await this.weatherRepository.create(model);
    } else {
      await this.weatherRepository.update(record.id, model);
    }

    return true;
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
