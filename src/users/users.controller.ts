import {  Controller, Get,Put,Post,Delete,Res,Req, HttpStatus,HttpException, Bind,Body,Param,NotFoundException,Query } from '@nestjs/common';
import { Response } from 'express';
//DTO USERS
import {CreateUserDTO,LoginIdUserDTO, UpdateUserDTO} from 'dw-data-types/dto/users.dto';
//INTERFACE USERS
import {UsersService} from './users.service';
@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService ){}


    @Post('/')
    @Bind(Res(),Body())
    async createPost(res:Response,createUserDTO:CreateUserDTO){
       console.log(createUserDTO,'Usuario')
   
        const {access_token} = await this.usersService.createUser(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message:'User Successfully Created',
            access_token  })
       
    }

    @Get('/')
    @Bind(Res())
    async getUsers(res:Response){
       const users = await this.usersService.getUsers();
       res.status(HttpStatus.OK).json({
        message:'Users',
        users
        })
    }

    //GET BY ID
    @Get('/:userId')
    @Bind(Res(),Param('userId'))
    async searchUser(res:Response,userId:string){
       console.log(userId,'user')
   
        const user = await this.usersService.searchOneuser(userId)
        res.status(HttpStatus.OK).json({
            message:'Usser',
            user
            })       
    }

    //GET BY ID
    @Get('/:userName')
    @Bind(Res(),Param('userName'))
    async searchNameUser(res:Response,userName:string){
       console.log(userName,'user')
   
        const user = await this.usersService.getNameUser(userName)
        res.status(HttpStatus.OK).json({
            message:'Usser',
            user
            })       
    }

     //DELETE
     @Delete('/:userId')
     @Bind(Res(),Param('userId'))
     async searchAndDeleteUser(res:Response,userId:string){
         console.log(userId,'user')
    
         const user = await this.usersService.searchAndDeleteUser(userId)
         res.status(HttpStatus.OK).json({
             message:'user',
             user
             })       
     }
 
     //UPDATE
     @Put('/')
     @Bind(Res(),Body())
     async searchAndUpdateUser(res:Response,updateuserDTO:UpdateUserDTO){
        console.log(updateuserDTO,'user')
    
         const user = await this.usersService.searchAndUpdateUser(updateuserDTO)
         res.status(HttpStatus.OK).json({
             message:'user',
             user
             })       
     }

    /*TEST*/
    @Post('/user')
    async loginPost(@Res() res, @Body() loginIdUserDTO:LoginIdUserDTO){
       const user = await this.usersService.getLoginIdUser(loginIdUserDTO);

       if (!user) throw new NotFoundException('User login failed');
       res.status(HttpStatus.OK).json({user})
    }


}
