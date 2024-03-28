import { Module } from '@nestjs/common';
import { WeatherController } from './wether.controller';
import { WeatherService } from './wether.service';
import { WeatherRepository } from './provider/weather.repository';
import { SequelizeModule } from '@nestjs/sequelize';
import { IWeatherRepository } from './interface/weather-repository.interface';
import { WeatherModel } from './model/weather.model';
import { IWeatherGateway } from '@common/gateways/interface/i-weather.gateway';
import { WeatherGateway } from '@common/gateways/weather.gateway';

@Module({
  imports: [SequelizeModule.forFeature([WeatherModel])],
  controllers: [WeatherController],
  providers: [
    WeatherService,
    {
      provide: IWeatherRepository,
      useClass: WeatherRepository,
    },
    {
      provide: IWeatherGateway,
      useClass: WeatherGateway,
    },
  ],
  exports: [WeatherService],
})
export class WeatherModule {}
