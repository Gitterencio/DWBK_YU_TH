import { Controller,Get,Post,Delete,Put,Res,HttpStatus,Bind,Body,Param,NotFoundException } from '@nestjs/common';
import { Response } from 'express';

import { InvitacionesService } from './invitaciones.service';
import {CreateInvitacionDTO,UpdateEstadoInvitacionDTO} from 'dw-data-types/dto/invitaciones.dto';
@Controller('invitaciones')
export class InvitacionesController {

    constructor(private invitacionesService:InvitacionesService ){}
    //CREATE
    @Post('/')
    @Bind(Res(),Body())
    async createInvitacion(res:Response,createInvitacionDTO:CreateInvitacionDTO){
       console.log(createInvitacionDTO,'Invitacion')
   
        const invitacion = await this.invitacionesService.createInvitacion(createInvitacionDTO)
        res.status(HttpStatus.OK).json({
            message:'Invitacion',
            invitacion
            })       
    }
    //UPDATE ESTADO
    @Put('/')
    @Bind(Res(),Body())
    async searchAndUpdateEstadoInvitacion(res:Response,updateEstadoInvitacionDTO:UpdateEstadoInvitacionDTO){
       console.log(updateEstadoInvitacionDTO,'Proyecto')
        const invitacion = await this.invitacionesService.updateEstadoInvitacion(updateEstadoInvitacionDTO);
        res.status(HttpStatus.OK).json({
            message:'Invitacion',
            invitacion
            })       
    }

    //GET BY CRE USER
    @Get('/user/:userId')
    @Bind(Res(),Param('userId'))
    async searchInvitacionesUser(res:Response,userId:string){
       console.log(userId,'User')
        const invitaciones = await this.invitacionesService.searchInvitacionesCreador(userId);
        res.status(HttpStatus.OK).json({
            message:'Invitaciones',
            invitaciones
            })       
    }

    //GET BY INV USER
    @Get('/invitado/:invitadoId')
    @Bind(Res(),Param('invitadoId'))
    async searchInvitacionesInvitado(res:Response,invitadoId:string){
       console.log(invitadoId,'Invitados')
        const invitaciones = await this.invitacionesService.searchInvitacionesInvitado(invitadoId);
        res.status(HttpStatus.OK).json({
            message:'Invitaciones',
            invitaciones
            })       
    }

    //GET BY ID
    @Get('/:invitacionId')
    @Bind(Res(),Param('invitacionId'))
    async searchInvitacion(res:Response,invitacionId:string){
       console.log(invitacionId,'Invitacions')
        const invitacion = await this.invitacionesService.searchInvitacion(invitacionId);
        res.status(HttpStatus.OK).json({
            message:'Invitacion',
            invitacion
            })       
    }

    //DELETE
    @Delete('/:invitacionId')
    @Bind(Res(),Param('invitacionId'))
    async searchAndDeleteInvitacion(res:Response,invitacionId:string){
       console.log(invitacionId,'Invitacions')
        const invitacion = await this.invitacionesService.searchAndDeleteInvitacion(invitacionId);
        res.status(HttpStatus.OK).json({
            message:'Invitacion',
            invitacion
            })       
    }
}
