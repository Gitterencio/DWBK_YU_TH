import { Controller,Get,Post,Delete,Put,Res,Req,HttpStatus,Bind,Body,Param,NotFoundException,
UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { ProyectosService } from './proyectos.service';
import {CreateProyectoDTO,UpdateProyectoDTO} from 'dw-data-types/dto/proyectos.dto'

import { AuthGuard } from 'src/auth/auth.guard';
import { UserPayload } from 'src/auth/auth.constans';
@Controller('proyectos')
export class ProyectosController {
    constructor(private proyectosService:ProyectosService ){}

    //CREATE
    @UseGuards(AuthGuard)
    @Post('')
    @Bind(Req(),Res(),Body())
    async createProyecto(req:any,res:Response,body:{name:string}){
       
       let userPayload:UserPayload = req.user;
       let createProyectoDTO:CreateProyectoDTO={
             name:body.name,
             user: userPayload.id
       }
       
       console.log(userPayload,'ususariooooo')
        const proyecto = await this.proyectosService.createProyecto(createProyectoDTO);
        if (!proyecto) throw new NotFoundException('Proyecto failed');
        res.status(HttpStatus.OK).json({
            message:'Proyecto Creado',
            proyecto
            })       
    }

    //GET BY ID
    @UseGuards(AuthGuard)
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

    //GET BY USER
    @UseGuards(AuthGuard)
    @Get('user/proyectos')
    @Bind(Req(),Res())
    async searchProyectosUser(req:any,res:Response){
        const userPayload:UserPayload = req.user;
        const proyectos = await this.proyectosService.searchProyectosUser(userPayload.id);
        res.status(HttpStatus.OK).json({
            message:'Proyectos',
            proyectos
            })       
    }

    //GET ALL
    @Get('/')
    @Bind(Res())
    async searchProyectos(res:Response){   
        const proyectos = await this.proyectosService.searchProyectos();
        res.status(HttpStatus.OK).json({
            message:'Proyectos',
            proyectos
            })       
    }

    //DELETE
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

    //UPDATE
    @UseGuards(AuthGuard)
    @Put()
    @Bind(Req(),Res(),Body())
    async searchAndUpdateProyecto(req:any,res:Response,updateProyectoDTO:UpdateProyectoDTO){
       console.log(updateProyectoDTO,'Proyecto')
   
        const proyecto = await this.proyectosService.searchAndUpdateProyecto(updateProyectoDTO)
        res.status(HttpStatus.OK).json({
            message:'Guardado',
            proyecto
            })       
    }


}
