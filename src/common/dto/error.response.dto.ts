import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseDto {
  @ApiProperty()
  public code?: number;
  @ApiProperty()
  public message: string;
}
