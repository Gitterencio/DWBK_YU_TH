import { Controller, Get,Put,Post,Delete,Res,Req, HttpStatus,HttpException, Body,Param,NotFoundException,Query,
    UseGuards,Bind } from '@nestjs/common';

import { Response } from 'express'; 

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

//DTO USERS
import {LoginEmailUserDTO} from 'dw-data-types/dto/users.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    @Bind(Res(),Body())
    async loginPost(res:Response, loginEmailUserDTO:LoginEmailUserDTO){
       const {access_token} = await this.authService.signIn(loginEmailUserDTO)
       if (!access_token) throw new NotFoundException('User login failed');

       res.status(HttpStatus.OK).json({
        message:'User login success',
        access_token})
    }


    /*headers Authorization: Yuno "accestoken"*/
    /*const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
return this.httpClient.get(this.baseURL + 'users/' + userName + '/repos', { 'headers': headers }) */
    @UseGuards(AuthGuard)
    @Get('profile')
    @Bind(Req())
    getProfile(req) {
      return req.user;
    }
}
