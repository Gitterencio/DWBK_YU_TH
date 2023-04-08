import { Controller, Get,Put,Post,Delete,Res,Req, HttpStatus,HttpException, Body,Param,NotFoundException,Query,
    Request,
    UseGuards } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

//DTO USERS
import {LoginEmailUserDTO} from 'dw-data-types/dto/users.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/login')
    async loginPost(@Res() res, @Body() loginEmailUserDTO:LoginEmailUserDTO){
       const login = await this.authService.signIn(loginEmailUserDTO)
       if (!login) throw new NotFoundException('User login failed');

       res.status(HttpStatus.OK).json({login})
    }


    /*headers Authorization: Yuno "accestoken"*/
    /*const headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
return this.httpClient.get(this.baseURL + 'users/' + userName + '/repos', { 'headers': headers }) */
    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
      return req.user;
    }
}
