import { Injectable ,HttpException,HttpStatus } from '@nestjs/common';

import {Model} from 'mongoose';
import {InjectModel} from '@nestjs/mongoose';

import {Snippets} from 'dw-data-types/interfaces/snippets.interface';
import {CreateSnippetDTO,UpdateScriptSnippetDTO} from 'dw-data-types/dto/snippets.dto';

@Injectable()
export class SnippetsService {
    constructor(@InjectModel('snippets') private readonly snippetsModel:Model<Snippets>){}

    //CREATE
   async createSnippet(createSnippetDTO: CreateSnippetDTO): Promise<Snippets> {
    const snippet = new this.snippetsModel(createSnippetDTO);
    await snippet.save()
    return snippet   
    }
   //GET BY ID
   async searchOneSnippet(snippetId: string): Promise<Snippets> {
    const snippet = this.snippetsModel.findById(snippetId);
    return snippet   
    }
   //GET BY USER
   async searchSnippetsUser(userId:string): Promise<Snippets[]> {
    const snippets = this.snippetsModel.find({user:userId});
    return snippets   
    }
   //GET ALL
   async searchSnippets(): Promise<Snippets[]> {
    const snippets = this.snippetsModel.find();
    return snippets   
    }
   //DELETE
   async searchAndDeleteSnippet(snippetId: string): Promise<Snippets> {
    const snippet = this.snippetsModel.findByIdAndDelete(snippetId);
    return snippet   
    }

   //UPDATE
   async searchAndUpdateSnippetScript(updateScriptSnippetDTO: UpdateScriptSnippetDTO): Promise<Snippets> {
    const snippet = this.snippetsModel.findByIdAndUpdate(updateScriptSnippetDTO.id,{script:updateScriptSnippetDTO.script},{new:true});
    return snippet   
    }

}
