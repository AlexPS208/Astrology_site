import { Controller, Get, Render, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { ViewsPath } from '../../src/enums/viewsPath';
import { join } from 'path';

@Controller('news')
export class NewsController {
    @Get()
    @Render(ViewsPath.news)
    news(): object {
        return {
            message: 'News page'
        };
    }

    @Get(':article')
    articlePage(@Param('article') article: string, @Res() res: Response): void {
        return res.render(join(ViewsPath.news_articles, article))
    }
}