import { ApiProperty } from '@nestjs/swagger';

export class WeatherDto {
  @ApiProperty({ description: 'Longitude', example: 32.4325 })
  log: number;

  @ApiProperty({
    description: 'latitude',
    example: 42.4324,
  })
  lat: number;

  @ApiProperty({
    description: 'Part',
    example: 'west',
  })
  part: string;
}
