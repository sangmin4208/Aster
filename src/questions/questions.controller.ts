import { UpdateQuestionDto } from './dto/update-question.dto';
import { QuestionsService } from './questions.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}
  @Get()
  findAll() {
    return this.questionsService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsService.findOne(id);
  }
  @Post()
  create(@Body() createDto: CreateQuestionDto) {
    return this.questionsService.create(createDto);
  }
  @Patch()
  update(@Param('id') id: string, @Body() updateDto: UpdateQuestionDto) {
    return this.questionsService.update(id, updateDto);
  }
  @Delete(':id')
  delete(@Param('id') id) {
    return this.questionsService.delete(id);
  }
}
