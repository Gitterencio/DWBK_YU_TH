import { Controller,Get,Post,Delete,Put,Res,HttpStatus,Bind,Body,Param,NotFoundException } from '@nestjs/common';
import { Response } from 'express';

import { ProyectosService } from './proyectos.service';
import {CreateProyectoDTO,UpdateProyectoDTO} from 'dw-data-types/dto/proyectos.dto'

@Controller('proyectos')
export class ProyectosController {
    constructor(private proyectosService:ProyectosService ){}

    @Post('/create')
    @Bind(Res(),Body())
    async createProyecto(res:Response,createProyectoDTO:CreateProyectoDTO){
       console.log(createProyectoDTO,'Proyecto')
   
        const proyecto = await this.proyectosService.createProyecto(createProyectoDTO);
        res.status(HttpStatus.OK).json({
            message:'Proyecto',
            proyecto
            })       
    }

    @Get('/:proyectoId')
    @Bind(Res(),Param('proyectoId'))
    async searchProyecto(res:Response,proyectoId:string){
       console.log(proyectoId,'Proyecto')
   
        const proyecto = await this.proyectosService.searchOneProyecto(proyectoId)
        res.status(HttpStatus.OK).json({
            message:'Proyecto',
            proyecto
            })       
    }

    @Get('/user/:userId')
    @Bind(Res(),Param('userId'))
    async searchProyectosUser(res:Response,userId:string){
       console.log(userId,'User')
        const proyectos = await this.proyectosService.searchProyectosUser(userId);
        res.status(HttpStatus.OK).json({
            message:'Proyectos',
            proyectos
            })       
    }

    @Get('/')
    @Bind(Res())
    async searchProyectos(res:Response){   
        const proyectos = await this.proyectosService.searchProyectos();
        res.status(HttpStatus.OK).json({
            message:'Proyectos',
            proyectos
            })       
    }

    @Delete('/:proyectoId')
    @Bind(Res(),Param('proyectoId'))
    async searchAndDeleteProyecto(res:Response,proyectoId:string){
        console.log(proyectoId,'Proyecto')
   
        const proyecto = await this.proyectosService.searchAndDeleteProyecto(proyectoId)
        res.status(HttpStatus.OK).json({
            message:'Proyecto',
            proyecto
            })       
    }

    @Put('/')
    @Bind(Res(),Body())
    async searchAndUpdateProyecto(res:Response,updateProyectoDTO:UpdateProyectoDTO){
       console.log(updateProyectoDTO,'Proyecto')
   
        const proyecto = await this.proyectosService.searchAndUpdateProyecto(updateProyectoDTO)
        res.status(HttpStatus.OK).json({
            message:'Proyecto',
            proyecto
            })       
    }


}
