import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { WeatherService } from './wether.service';
import {
  ApiBadRequestResponse,
  ApiNotFoundResponse,
  ApiTags,
} from '@nestjs/swagger';
import { WeatherDto } from './dto/weather.dto';
import { ErrorResponseDto } from '@common/dto/error.response.dto';
import { ApiCreatedDataResponse, ApiOkDataResponse } from '@common/decorators';
import { WeatherModel } from './model/weather.model';
import { WeatherModelInterface } from './interface/weather.interface';
import { WeatherInterceptor } from './interceptors/weather.interceptor';

@ApiTags('Weather')
@Controller('wheather')
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @ApiCreatedDataResponse({
    description: 'Successfully saved weather data',
    type: Boolean,
  })
  @ApiBadRequestResponse({
    description: 'Missing or wrong type of param',
    type: ErrorResponseDto,
  })
  @Post('/')
  async saveOrUpdateWeather(
    @Body() weatherDto: WeatherDto,
  ): Promise<{ success: boolean }> {
    const success = await this.weatherService.saveOrUpdateWeather(weatherDto);

    return { success };
  }

  @ApiOkDataResponse({
    description: 'Successfully receiving weather',
    type: WeatherModel,
  })
  @ApiNotFoundResponse({
    description: "Weather doesn't exist",
    type: ErrorResponseDto,
  })
  @Get('/')
  @UseInterceptors(WeatherInterceptor)
  async getWeather(
    @Query('lon') lon: number,
    @Query('lat') lat: number,
    @Query('part') part: string,
  ): Promise<WeatherModelInterface> {
    const info = await this.weatherService.getWeather({
      lon,
      lat,
      part,
    });

    return info;
  }
}
