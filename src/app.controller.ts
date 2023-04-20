import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import { ViewsPath } from '../src/enums/viewsPath';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Render(ViewsPath.home)
  root(@Res() res: Response) {
    return res.sendFile('index.ejs', {root: 'views'})
  }

  getHello(): string {
    return 'Hello World!';
  }
}
