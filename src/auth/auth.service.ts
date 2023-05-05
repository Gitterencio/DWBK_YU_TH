import { Injectable,UnauthorizedException } from '@nestjs/common';

import { UsersService } from 'src/users/users.service';

import {LoginEmailUserDTO} from 'dw-data-types/dto/users.dto';
import {PasswordHashingService} from '../password-hashing/password-hashing.service';

import { JwtService } from '@nestjs/jwt';
import { UserPayload } from './auth.constans';
@Injectable()
export class AuthService {
    constructor(private usersService: UsersService,
        private passwordHashingService:PasswordHashingService,
        private jwtService: JwtService) {}

    async signIn(loginEmailUserDTO:LoginEmailUserDTO): Promise<{access_token:string}> {
        const user = await this.usersService.getEmailUser(loginEmailUserDTO.email);
        const isMatch = await this.passwordHashingService.comparePass(loginEmailUserDTO.password,user.password);
        if (!isMatch) {
          throw new UnauthorizedException();
        }
        /*implementar token*/
        const payload:UserPayload = { name:user.name,email: user.email, id: user._id };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };

        //return user;
      }

}
