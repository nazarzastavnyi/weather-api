import { CustomException } from '@common/exceptions/custom.exception';
import { HttpStatus } from '@nestjs/common';
import { ErrorCodes } from '@common/enum/error-codes.enum';

export class BadRequestException extends CustomException {
    constructor(message: string) {
        super(message, HttpStatus.BAD_REQUEST, ErrorCodes.BAD_REQUEST);
    }
}
