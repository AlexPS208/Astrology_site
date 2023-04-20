import { Controller, Get, Render } from '@nestjs/common';
import { ViewsPath } from '../../src/enums/viewsPath';

@Controller('year_horoscope')
export class YearHoroscopeController {
    @Get()
    @Render(ViewsPath.horoscope)
    advicePage(): object {
        return { 
            message: 'Year horoscope page'
        }
    }
}
