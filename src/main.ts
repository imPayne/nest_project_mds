import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Building API')
    .setDescription('API D.Galugis exercice')
    .setVersion('1.0')
    .addTag('building')
    .build();
  app.enableCors();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('hugomonchablon', app, document);
  await app.listen(3000);
}
bootstrap();
