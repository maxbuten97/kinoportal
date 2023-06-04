require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 4000;

  const config = new DocumentBuilder()
    .setTitle('kinoportal')
    .setDescription('The kinoportal API description')
    .setVersion('1.0')
    .addTag('actor')
    .addTag('film')
    .addTag('admin')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors({
    origin: true
  });

  await app.listen(PORT);
}
bootstrap();
