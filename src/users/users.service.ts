import { Injectable,HttpException,HttpStatus } from '@nestjs/common';

import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

import {CreateUserDTO,LoginIdUserDTO,LoginEmailUserDTO} from 'dw-data-types/dto/users.dto';
import {Users} from 'dw-data-types/interfaces/users.interface';

import {PasswordHashingService} from '../password-hashing/password-hashing.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
    constructor(@InjectModel('users') private readonly usersModel:Model<Users>,
    private passwordHashingService:PasswordHashingService,
    private jwtService: JwtService){}

    async createUser(createUserDTO: CreateUserDTO): Promise<{access_token:string}> {

        const hashedPass = await this.passwordHashingService.hashPass(createUserDTO.password);
        createUserDTO = {
            name : createUserDTO.name,
            email: createUserDTO.email,
            password: hashedPass
            }
        try {
            const user = new this.usersModel(createUserDTO);
            await user.save();
            const payload = { name:user.name,email: user.email, id: user._id };
            return {
                access_token: await this.jwtService.signAsync(payload),
              };
        } catch (err) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: `${err}`.substring(0,16),
                content:`${err}`.substring(18)
                }, HttpStatus.FORBIDDEN, {
                    cause:err
                    });
        }
    }
    async getUsers(): Promise<Users[]>{
        const users = await this.usersModel.find();
        return users;
    }

    async getEmailUser(email:string): Promise<Users>{
        const user = await this.usersModel.findOne({email});
        if (!user) {
            throw new HttpException('Not exist user', HttpStatus.FORBIDDEN);
          }
        return user;
    }

    /*TEST*/
    async getLoginIdUser(loginIdUserDTO:LoginIdUserDTO): Promise<Users>{
        const user = await this.usersModel.findById(loginIdUserDTO.id);
        if (!user) return null;
        const pass = await this.passwordHashingService.comparePass(loginIdUserDTO.password,user.password)
        if (!pass) return null;
        return user;
    }



}
