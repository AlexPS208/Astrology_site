import { Controller, Get, Render } from '@nestjs/common';
import { ViewsPath } from '../../src/enums/viewsPath';


@Controller('day_advice')
export class DayAdviceController {
    @Get()
    @Render(ViewsPath.advice)
    advicePage(): object {
        return { 
            message: 'Day advice page'
        }
    }
}
