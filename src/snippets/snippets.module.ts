import { Module } from '@nestjs/common';
import { SnippetsService } from './snippets.service';
import {MongooseModule} from '@nestjs/mongoose';
import { SnippetsModel } from './model/snippets.model';
import { SnippetsController } from './snippets.controller';

@Module({
  imports:[
    MongooseModule.forFeature([SnippetsModel])
  ],
  controllers:[SnippetsController],
  providers: [SnippetsService],
  exports:[SnippetsService]
  
})
export class SnippetsModule {}
