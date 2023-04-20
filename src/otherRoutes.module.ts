import { Module } from "@nestjs/common";
import { NewsController } from './news/news.controller';
import { DayAdviceController } from './day_advice/day_advice.controller';
import { YearHoroscopeController } from './year_horoscope/year_horoscope.controller';
import { CharacteristicsController } from './characteristics/characteristics.controller';


@Module({
    providers: [],
    controllers: [NewsController, DayAdviceController, YearHoroscopeController, CharacteristicsController]
})

export class otherRoutes{}