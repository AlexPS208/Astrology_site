import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import dotenv from 'dotenv/config';
import ejs from 'ejs';
import express from 'express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule,
  );

  // app.useStaticAssets(join(__dirname, 'views'));
  // app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.set('views', join(__dirname, 'views'));
  app.use('/static', express.static('src/views'));
  app.setViewEngine('ejs');
  app.engine('ejs', ejs.__express);

  const PORT = process.env.PORT || 3000
  await app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
  });
}
bootstrap();