import { Controller,Get,Post,Delete,Put,Res,HttpStatus,Bind,Body,Param,NotFoundException } from '@nestjs/common';
import { Response } from 'express';

import { PlanesService } from './planes.service';
import {CreatePlanDTO,UpdatePlanDTO} from 'dw-data-types/dto/planes.dto';
@Controller('planes')
export class PlanesController {
    constructor(private planesService:PlanesService ){}

    //CREATE
    @Post('/')
    @Bind(Res(),Body())
    async createPlan(res:Response,createPlanDTO:CreatePlanDTO){
       console.log(createPlanDTO,'Plan')
   
        const plan = await this.planesService.createPlan(createPlanDTO);
        res.status(HttpStatus.OK).json({
            message:'Plan',
            plan
            })       
    }

    //GET BY ID
    @Get('/:planId')
    @Bind(Res(),Param('planId'))
    async searchPlan(res:Response,planId:string){
       console.log(planId,'Plan')
   
        const plan = await this.planesService.searchOnePlan(planId)
        res.status(HttpStatus.OK).json({
            message:'Plan',
            plan
            })       
    }


    //GET ALL
    @Get('/')
    @Bind(Res())
    async searchPlanes(res:Response){   
        const planes = await this.planesService.searchPlanes();
        res.status(HttpStatus.OK).json({
            message:'Planes',
            planes
            })       
    }

    //DELETE
    @Delete('/:planId')
    @Bind(Res(),Param('planId'))
    async searchAndDeletePlan(res:Response,planId:string){
        console.log(planId,'Plan')
   
        const plan = await this.planesService.searchAndDeletePlan(planId)
        res.status(HttpStatus.OK).json({
            message:'Plan',
            plan
            })       
    }

    //UPDATE
    @Put('/')
    @Bind(Res(),Body())
    async searchAndUpdatePlan(res:Response,updatePlanDTO:UpdatePlanDTO){
       console.log(updatePlanDTO,'Plan')
   
        const plan = await this.planesService.searchAndUpdatePlan(updatePlanDTO)
        res.status(HttpStatus.OK).json({
            message:'Plan',
            plan
            })       
    }

}
