import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class PasswordHashingService {


  async  hashPass(password:string):Promise<string>{
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt);
        return hashedPass
    }

 async  comparePass(password:string,hashedPass:string):Promise<boolean>{
        const isMatch = await bcrypt.compare(password, hashedPass);
        return isMatch
    }
   
   


}
