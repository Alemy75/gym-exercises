import {
  BadRequestException,
  Controller,
  Get,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { Exercise } from './exercise.entity';
import { ExerciseService } from './exercise.service';

@Controller('exercise')
export class ExerciseController {
  constructor(private exerciseService: ExerciseService) {}

  @Get()
  getExercises(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<{ items: Exercise[]; total: number; pagesCount: number }> {
    if (isNaN(page) || page <= 0) {
      throw new BadRequestException('Неккоректный query параметр: page');
    }

    if (isNaN(limit) || limit <= 0) {
      throw new BadRequestException('Неккоректный query параметр: limit');
    }

    return this.exerciseService.getExercises(page, limit);
  }

  @Get(':id')
  async getExerciseById(@Param('id') id: number): Promise<Exercise | null> {
    const exercise = await this.exerciseService.getExerciseById(id);

    if (!exercise) {
      throw new NotFoundException(`Упражнение не найдено`);
    }

    return exercise;
  }
}
