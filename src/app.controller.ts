import { Controller, Get, HttpCode } from '@nestjs/common';
import { ApiExcludeController } from '@nestjs/swagger';

export const healthCheckRoute = '/health';
export const faviconRoute = '/favicon.ico';

@ApiExcludeController()
@Controller()
export class AppController {
  @Get(healthCheckRoute)
  @HttpCode(200)
  async healthCheck() {
    return 'Success';
  }

  @Get(faviconRoute)
  @HttpCode(200)
  favicon() {
    return '';
  }
}
