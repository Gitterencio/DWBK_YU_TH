import { Controller, Get,Post,Body ,HttpStatus,Res} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get')
  getAHello(@Res() res) {
    return res.status(HttpStatus.OK).json({
      mensaje:'Respuesta GET NEST BACKEND'})
  }

  @Post('/post')
  postAHello(@Res() res,@Body() body) {
    console.log(body)
    return res.status(HttpStatus.OK).json({
      mensaje:body.mensaje +'  Respuesta POST NEST BACKEND'})
  }
}
