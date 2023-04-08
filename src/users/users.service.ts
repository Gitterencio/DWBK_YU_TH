import { Injectable } from '@nestjs/common';

import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

import {CreateUserDTO,LoginIdUserDTO} from 'dw-data-types/dto/users.dto';
import {Users} from 'dw-data-types/interfaces/users.interface';

import {PasswordHashingService} from '../password-hashing/password-hashing.service';

@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private readonly usersModel:Model<Users>,
    private passwordHashingService:PasswordHashingService){}

    async createUser(createUserDTO: CreateUserDTO):Promise<Users>{
        const hashedPass = await this.passwordHashingService.hashPass(createUserDTO.password);
        createUserDTO = {
            name : createUserDTO.name,
            email: createUserDTO.email,
            password: hashedPass
        }

        const user = new this.usersModel(createUserDTO);
        await user.save();
        return user;
    }
    async getUsers(): Promise<Users[]>{
        const users = await this.usersModel.find();
 
        return users;
    }

    async getLoginIdUser(loginIdUserDTO:LoginIdUserDTO): Promise<Users>{
        const user = await this.usersModel.findById(loginIdUserDTO.id);
        if (!user) return null;
        const pass = await this.passwordHashingService.comparePass(loginIdUserDTO.password,user.password)
        if (!pass) return null;
        return user;
    }
}
