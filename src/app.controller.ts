import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/foods')
  getFoods(): any {
    return {
      enviroment: process.env.ENVIROMENT,
      food: this.appService.getFoods(),
    };
  }
}
