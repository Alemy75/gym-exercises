import { Controller, Get } from '@nestjs/common';
import { Exercise } from './exercise.entity';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}

  @Get()
  getExercises(): Promise<Exercise[]> {
    return this.exerciseService.getExercises();
  }
}
