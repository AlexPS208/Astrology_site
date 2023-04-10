import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { ViewsPath } from 'src/enums/viewsPath';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render(ViewsPath.home)
  root(): object {
    return { message: 'Main page' };
  }
}
