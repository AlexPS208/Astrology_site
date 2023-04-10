import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NewsController } from './news/news.controller';
import { DayAdviceController } from './day_advice/day_advice.controller';
import { YearHoroscopeController } from './year_horoscope/year_horoscope.controller';
import { CharacteristicsController } from './characteristics/characteristics.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'views'),
    })
  ],
  controllers: [AppController, NewsController, DayAdviceController, YearHoroscopeController, CharacteristicsController],
  providers: [AppService],
})
export class AppModule {}
