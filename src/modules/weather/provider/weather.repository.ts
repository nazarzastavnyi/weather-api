import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { WeatherModel } from '../model/weather.model';
import { IWeatherRepository } from '../interface/weather-repository.interface';
import {
  WeatherModelInterface,
  WeatherInfo,
} from '../interface/weather.interface';

@Injectable()
export class WeatherRepository implements IWeatherRepository {
  constructor(
    @InjectModel(WeatherModel) private weatherModel: typeof WeatherModel,
  ) {}

  async create(data: WeatherModelInterface): Promise<WeatherModel> {
    return this.weatherModel.create({
      lon: data.lon,
      lat: data.lat,
      part: data.part,
      weather: data.weather,
    });
  }

  async findOne(info: WeatherInfo): Promise<WeatherModel> {
    return this.weatherModel.findOne({
      where: {
        lat: info.lat,
        lon: info.lon,
        part: info.part,
      },
    });
  }

  async update(id: number, info: WeatherInfo): Promise<any> {
    return this.weatherModel.update(info, {
      where: {
        id,
      },
      returning: true,
    });
  }
}
