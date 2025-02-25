import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Exercise } from './exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject('EXERCISE_REPOSITORY')
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async getExercises(): Promise<Exercise[]> {
    return this.exerciseRepository.find();
  }
}
