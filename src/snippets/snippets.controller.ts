import { Controller,Get,Post,Delete,Put,Res,HttpStatus,Bind,Body,Param,NotFoundException } from '@nestjs/common';
import { Response } from 'express';

import { SnippetsService } from './snippets.service';
import {CreateSnippetDTO,UpdateScriptSnippetDTO} from 'dw-data-types/dto/snippets.dto';

@Controller('snippets')
export class SnippetsController {
    
    constructor(private snippetsService:SnippetsService ){}

    //CREATE
    @Post('/')
    @Bind(Res(),Body())
    async createSnippet(res:Response,createSnippetDTO:CreateSnippetDTO){
       console.log(createSnippetDTO,'Snippet')
   
        const snippet = await this.snippetsService.createSnippet(createSnippetDTO);
        res.status(HttpStatus.OK).json({
            message:'Snippet',
            snippet
            })       
    }

    //GET BY ID
    @Get('/:snippetId')
    @Bind(Res(),Param('snippetId'))
    async searchSnippet(res:Response,snippetId:string){
       console.log(snippetId,'Snippet')
   
        const snippet = await this.snippetsService.searchOneSnippet(snippetId)
        res.status(HttpStatus.OK).json({
            message:'Snippet',
            snippet
            })       
    }

    //GET BY USER
    @Get('/user/:userId')
    @Bind(Res(),Param('userId'))
    async searchSnippetsUser(res:Response,userId:string){
       console.log(userId,'User')
        const snippets = await this.snippetsService.searchSnippetsUser(userId);
        res.status(HttpStatus.OK).json({
            message:'Snippets',
            snippets
            })       
    }

    //GET ALL
    @Get('/')
    @Bind(Res())
    async searchSnippets(res:Response){   
        const snippets = await this.snippetsService.searchSnippets();
        res.status(HttpStatus.OK).json({
            message:'Snippets',
            snippets
            })       
    }

    //DELETE
    @Delete('/:snippetId')
    @Bind(Res(),Param('snippetId'))
    async searchAndDeleteSnippet(res:Response,snippetId:string){
        console.log(snippetId,'Snippet')
   
        const snippet = await this.snippetsService.searchAndDeleteSnippet(snippetId)
        res.status(HttpStatus.OK).json({
            message:'Snippet',
            snippet
            })       
    }

    //UPDATE
    @Put('/')
    @Bind(Res(),Body())
    async searchAndUpdateSnippet(res:Response,updateScriptSnippetDTO:UpdateScriptSnippetDTO){
       console.log(updateScriptSnippetDTO,'Snippet')
   
        const snippet = await this.snippetsService.searchAndUpdateSnippetScript(updateScriptSnippetDTO)
        res.status(HttpStatus.OK).json({
            message:'Snippet',
            snippet
            })       
    }

}
