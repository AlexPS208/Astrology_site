import { Controller, Get, Render, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ViewsPath } from '../../src/enums/viewsPath';
import { join } from 'path';


@Controller('characteristics')
export class CharacteristicsController {
    @Get()
    @Render(ViewsPath.characteristics)
    charactersPage(): object {
        return { 
            message: 'Zodiacs characteristics page' 
        }
    }

    @Get(':zodiak')
    zodiakPage(@Param('zodiak') zodiak: string, @Res() res: Response): void {
        return res.render(join(ViewsPath.zodiacs, zodiak))
    }
}
