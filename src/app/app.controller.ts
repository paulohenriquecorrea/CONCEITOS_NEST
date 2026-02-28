import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('home')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello') // Método da solicitação -> Ler (Read) -> CRUD
  getHello(): string {
    return this.appService.getHello();
  }
}
