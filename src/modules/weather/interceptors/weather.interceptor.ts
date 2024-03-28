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
          sunrise: data?.sunrise,
          sunset: data?.sunset,
          temp: data?.temp,
          feels_like: data?.feels_like,
          pressure: data?.pressure,
          uvi: data?.uvi,
          wind_speed: data?.wind_speed,
        };
        return item;
      }),
    );
  }
}
