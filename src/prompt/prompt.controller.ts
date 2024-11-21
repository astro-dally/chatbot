import { Body, Controller, Post } from '@nestjs/common';
import { PromptService } from './prompt.service';

@Controller('prompt')
export class PromptController {
  constructor(private readonly promptService: PromptService) {}
  @Post('')
  getPromptResponse(@Body() prompt: any) {
    return this.promptService.getPromptResponse(prompt.text);
  }
}
