import { Controller,Get,Post,Delete,Put,Res,Req,HttpStatus,Bind,Body,Param,NotFoundException,UseGuards } from '@nestjs/common';
import { Response } from 'express';

import { InvitacionesService } from './invitaciones.service';
import {CreateInvitacionDTO,UpdateEstadoInvitacionDTO} from 'dw-data-types/dto/invitaciones.dto';

import { AuthGuard } from 'src/auth/auth.guard';
import { UserPayload } from 'src/auth/auth.constans';
@Controller('invitaciones')
export class InvitacionesController {

    constructor(private invitacionesService:InvitacionesService ){}
    //CREATE
    @UseGuards(AuthGuard)
    @Post('')
    @Bind(Req(),Res(),Body())
    async createInvitacion(req:any,res:Response,createInvitacionDTO:CreateInvitacionDTO){
       console.log(createInvitacionDTO,'Invitacion')
       let userPayload:UserPayload = req.user;
        createInvitacionDTO.user = userPayload.id

        const invitacion = await this.invitacionesService.createInvitacion(createInvitacionDTO)
        if (!invitacion) throw new NotFoundException('Invitacion failed');
        res.status(HttpStatus.OK).json({
            message:'Invitacion',
            invitacion
            })       
    }
    //UPDATE ESTADO
    @UseGuards(AuthGuard)
    @Put('')
    @Bind(Req(),Res(),Body())
    async searchAndUpdateEstadoInvitacion(req:any,res:Response,updateEstadoInvitacionDTO:UpdateEstadoInvitacionDTO){
       console.log(updateEstadoInvitacionDTO,'Proyecto')
        const invitacion = await this.invitacionesService.updateEstadoInvitacion(updateEstadoInvitacionDTO);
        res.status(HttpStatus.OK).json({
            message:'Invitacion',
            invitacion
            })       
    }

    //GET BY CRE USER
    @UseGuards(AuthGuard)
    @Get('/user/invitaciones')
    @Bind(Req(),Res())
    async searchInvitacionesUser(req:any,res:Response){
        const userPayload:UserPayload = req.user;
        const invitaciones = await this.invitacionesService.searchInvitacionesCreador(userPayload.id);
        res.status(HttpStatus.OK).json({
            message:'Invitaciones',
            invitaciones
            })       
    }

    //GET BY INV USER
    @UseGuards(AuthGuard)
    @Get('/invitado/invitaciones')
    @Bind(Req(),Res())
    async searchInvitacionesInvitado(req:any,res:Response){
        const userPayload:UserPayload = req.user;
        const invitaciones = await this.invitacionesService.searchInvitacionesInvitado(userPayload.email);
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
