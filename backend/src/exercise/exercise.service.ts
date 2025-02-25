import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Exercise } from './exercise.entity';

@Injectable()
export class ExerciseService {
  constructor(
    @Inject('EXERCISE_REPOSITORY')
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async getExercises(
    page: number,
    limit: number,
  ): Promise<{ items: Exercise[]; total: number; pagesCount: number }> {
    const [items, total] = await this.exerciseRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });

    return { items, total, pagesCount: Math.ceil(total / limit) };
  }

  async getExerciseById(id: number): Promise<Exercise | null> {
    return this.exerciseRepository.findOne({ where: { id } });
  }
}
