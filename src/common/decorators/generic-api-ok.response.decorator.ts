import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger';
import { applyDecorators, Type } from '@nestjs/common';
import { ApiResponseDto } from '../dto/response.dto';

export const ApiOkDataResponse = <DataDto extends Type<unknown>>(dataDto: {
  description: string;
  type: DataDto;
}) =>
  applyDecorators(
    ApiExtraModels(ApiResponseDto, dataDto.type),
    ApiOkResponse({
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
