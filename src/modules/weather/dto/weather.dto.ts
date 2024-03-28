import { ApiProperty } from '@nestjs/swagger';
import { Part } from '../enum/weather.enum';

export class WeatherDto {
  @ApiProperty({ description: 'Longitude', example: 32.4325 })
  lon: number;

  @ApiProperty({
    description: 'latitude',
    example: 42.4324,
  })
  lat: number;

  @ApiProperty({
    description: 'Part',
    enum: Part,
    example: Part.CURRENT,
  })
  part: Part;
}
