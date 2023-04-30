import { Injectable ,HttpException,HttpStatus } from '@nestjs/common';

import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

import {Planes} from 'dw-data-types/interfaces/planes.interface';
import {CreatePlanDTO,UpdatePlanDTO} from 'dw-data-types/dto/planes.dto';
@Injectable()
export class PlanesService {
    constructor(@InjectModel('planes') private readonly planesModel:Model<Planes>){}

       //CREATE
   async createPlan(createPlanDTO: CreatePlanDTO): Promise<Planes> {
    const plan = new this.planesModel(createPlanDTO);
    await plan.save()
    return plan   
    }
   //GET BY ID
   async searchOnePlan(planId: string): Promise<Planes> {
    const plan = this.planesModel.findById(planId);
    return plan   
    }
    
   //GET ALL
   async searchPlanes(): Promise<Planes[]> {
    const planes = this.planesModel.find();
    return planes   
    }
   //DELETE
   async searchAndDeletePlan(planId: string): Promise<Planes> {
    const plan = this.planesModel.findByIdAndDelete(planId);
    return plan   
    }

   //UPDATE
   async searchAndUpdatePlan(updatePlanDTO: UpdatePlanDTO): Promise<Planes> {
    const plan = this.planesModel.findByIdAndUpdate(updatePlanDTO.id,updatePlanDTO,{new:true});
    return plan   
    }
}
