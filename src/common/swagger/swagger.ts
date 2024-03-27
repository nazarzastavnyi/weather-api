import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export default (app) => {
  const config = new DocumentBuilder()
    .setTitle('Weather')
    .setDescription('API to get and save information about weather')
    .setVersion('0.0.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
