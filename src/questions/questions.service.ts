import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionsService {
  findAll() {
    return `Read All Questions`;
  }
  findOne(id: string) {
    return `Read Question ${id}`;
  }
  create(createQuestion: CreateQuestionDto) {
    //Todo Create Question
    return `Create Question ${createQuestion}`;
  }
  update(id: string, updateDto: UpdateQuestionDto) {
    //TODO Update Question
    return `Update Question ${id}, ${updateDto}`;
  }
  delete(id: string) {
    //TODO Delete Question
    return `Deleted Question ${id}`;
  }
}
