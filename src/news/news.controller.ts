import { Controller, Get, Param, Res, Render } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

@Controller('news')
export class NewsController {
    @Get()
    @Render('src/astrology_news')
    news(): object {
        return {
            message: 'News page'
        };
    }

    @Get(':article')
    articlePage(@Param('article') article: string, @Res() res: Response) {
        return res.render(join('src', 'news', article))
    }
}