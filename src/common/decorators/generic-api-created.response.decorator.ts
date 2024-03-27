import { applyDecorators, Type } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiExtraModels,
  getSchemaPath,
} from '@nestjs/swagger';
import { ApiResponseDto } from '@common/dto/response.dto';

export const ApiCreatedDataResponse = <DataDto extends Type<unknown>>(dataDto: {
  description: string;
  type: DataDto;
}) =>
  applyDecorators(
    ApiExtraModels(ApiResponseDto, dataDto.type),
    ApiCreatedResponse({
      description: dataDto.description,
      schema: {
        allOf: [
          { $ref: getSchemaPath(ApiResponseDto) },
          {
            properties: {
              data: { $ref: getSchemaPath(dataDto.type) },
            },
          },
        ],
      },
    }),
  );
