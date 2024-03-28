import { Injectable } from '@nestjs/common';
import { IWeatherData, IWeatherGateway } from './interface/i-weather.gateway';
import axios from 'axios';

export interface APIResponseInterface {
  sunrise: number;
  sunset: number;
  temp: number;
  feels_like: number;
  pressure: number;
  uvi: number;
  wind_speed: number;
}

@Injectable()
export class WeatherGateway implements IWeatherGateway {
  getWeather(weatherData: IWeatherData): Promise<APIResponseInterface> {
    return new Promise((resolve: any, reject: any) => {
      axios
        .get(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${weatherData.lat}&lon=${weatherData.lon}&appid=${process.env.WEATHER_API_KEY}`,
        )
        .then((data) => {
          const partData = data.data[weatherData.part];
          resolve({
            sunrise: partData?.sunrise,
            sunset: partData?.sunset,
            temp: partData?.temp,
            feels_like: partData?.feels_like,
            pressure: partData?.pressure,
            uvi: partData?.uvi,
            wind_speed: partData?.wind_speed,
          });
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
