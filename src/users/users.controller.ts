import {  Controller, Get,Put,Post,Delete,Res,Req, HttpStatus,HttpException, Body,Param,NotFoundException,Query } from '@nestjs/common';

//DTO USERS
import {CreateUserDTO,LoginIdUserDTO} from 'dw-data-types/dto/users.dto';
//INTERFACE USERS
import {UsersService} from './users.service';
@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService ){}


    @Post('/create')
    async createPost(@Res() res, @Body() createUserDTO:CreateUserDTO){
       console.log(createUserDTO,'Usuario')
   
        const {access_token} = await this.usersService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message:'User Successfully Created',
            access_token  })
 
       
    }

    /*TEST*/
    @Post('/user')
    async loginPost(@Res() res, @Body() loginIdUserDTO:LoginIdUserDTO){
       const user = await this.usersService.getLoginIdUser(loginIdUserDTO);

       if (!user) throw new NotFoundException('User login failed');
       res.status(HttpStatus.OK).json({user})
    }
    @Get('/')
    async getUsers(@Res() res){
       const users = await this.usersService.getUsers();
       res.status(HttpStatus.OK).json({
        message:'Users ',
        users
        })
    }

}
