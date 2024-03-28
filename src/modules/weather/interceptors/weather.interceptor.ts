import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  Injectable,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class WeatherInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) => {
        const item = {
          sunrise: data.weather.sunrise,
          sunset: data.weather.sunset,
          temp: data.weather.temp,
          feels_like: data.weather.feels_like,
          pressure: data.weather.pressure,
          uvi: data.weather.uvi,
          wind_speed: data.weather.wind_speed,
        };
        return item;
      }),
    );
  }
}
