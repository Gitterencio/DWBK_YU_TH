import { Module } from '@nestjs/common';
import { SnippetsService } from './snippets.service';

@Module({
  providers: [SnippetsService]
})
export class SnippetsModule {}
