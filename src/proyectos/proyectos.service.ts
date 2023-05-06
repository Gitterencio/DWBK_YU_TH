import { Injectable ,HttpException,HttpStatus } from '@nestjs/common';

import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

import {Proyectos} from 'dw-data-types/interfaces/proyectos.interface';
import {CreateProyectoDTO,UpdateProyectoDTO} from 'dw-data-types/dto/proyectos.dto'
@Injectable()
export class ProyectosService {
   constructor(@InjectModel('proyectos') private readonly proyectosModel:Model<Proyectos>){}

   //CREATE
   async createProyecto(createProyectoDTO: CreateProyectoDTO): Promise<Proyectos> {
    const proyecto = new this.proyectosModel(createProyectoDTO);
    await proyecto.save()
    return proyecto   
    }
   //GET BY ID
   async searchOneProyecto(proyectoId: string): Promise<Proyectos> {
    const proyecto = this.proyectosModel.findById(proyectoId);
    return proyecto   
    }
   //GET BY USER
   async searchProyectosUser(userId:string): Promise<Proyectos[]> {
    const proyectos = this.proyectosModel.find({user:userId},{name:1,});
    return proyectos   
    }
   //GET ALL
   async searchProyectos(): Promise<Proyectos[]> {
    const proyectos = this.proyectosModel.find();
    return proyectos   
    }
   //DELETE
   async searchAndDeleteProyecto(proyectoId: string): Promise<Proyectos> {
    const proyecto = this.proyectosModel.findByIdAndDelete(proyectoId);
    return proyecto   
    }

   //UPDATE
   async searchAndUpdateProyecto(updateProyectoDTO: UpdateProyectoDTO): Promise<Proyectos> {
    const proyecto = this.proyectosModel.findByIdAndUpdate(updateProyectoDTO._id,updateProyectoDTO,{new:true});
    return proyecto   
    }


}
