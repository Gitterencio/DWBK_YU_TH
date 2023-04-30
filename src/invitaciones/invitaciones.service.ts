import { Injectable } from '@nestjs/common';

import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

import {Invitaciones} from 'dw-data-types/interfaces/invitaciones.interface';
import {CreateInvitacionDTO,UpdateEstadoInvitacionDTO} from 'dw-data-types/dto/invitaciones.dto';
@Injectable()
export class InvitacionesService {
    constructor(@InjectModel('invitaciones') private readonly invitacionesModel:Model<Invitaciones>){}

    //CREATE
    async createInvitacion(createInvitacionDTO: CreateInvitacionDTO): Promise<Invitaciones> {
        const inivitacion = new this.invitacionesModel(createInvitacionDTO);
        await inivitacion.save()
        return inivitacion   
        }

    //UPDATE ESTADO
    async updateEstadoInvitacion(updateEstadoInvitacionDTO:UpdateEstadoInvitacionDTO): Promise<Invitaciones>{
        const invitacion = this.invitacionesModel.findByIdAndUpdate(updateEstadoInvitacionDTO.id,{estado:updateEstadoInvitacionDTO.estado},{new:true});
        return invitacion
    }
    //GET BY CRE USER
    async searchInvitacionesCreador(userId:string): Promise<Invitaciones[]> {
        const invitaciones = this.invitacionesModel.find({user:userId});
        return invitaciones   
        }

    //GET BY INV USER
    async searchInvitacionesInvitado(invitadoId:string): Promise<Invitaciones[]> {
        const invitaciones = this.invitacionesModel.find({invitado:invitadoId});
        return invitaciones   
        }

    //GET BY ID
    async searchInvitacion(id:string): Promise<Invitaciones> {
        const invitacion = this.invitacionesModel.findById(id);
        return invitacion   
        }

    //DELETE
    async searchAndDeleteInvitacion(id:string): Promise<Invitaciones> {
        const invitacion = this.invitacionesModel.findByIdAndDelete(id);
        return invitacion   
        }
}
