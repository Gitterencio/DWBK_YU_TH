import { Controller, Get,Post,Body ,HttpStatus,Res, Bind} from '@nestjs/common';
import { AppService } from './app.service';
import {Request,Response,} from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get')
  @Bind(Res())
  getAHello(res:Response) {
    return res.status(HttpStatus.OK).json({
      mensaje:'Respuesta GET NEST BACKEND'})
  }

  @Post('/post')
  @Bind(Res(), Body())
  postAHello(res:Response, body) {
    console.log(body)
    return res.status(HttpStatus.OK).json({
      mensaje:body.mensaje +'  Respuesta POST NEST BACKEND'})
  }
}
