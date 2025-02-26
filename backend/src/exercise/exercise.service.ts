import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Exercise } from './exercise.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ExerciseService {
  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  async getExercises(
    page: number,
    limit: number,
  ): Promise<{ items: Exercise[]; total: number; pagesCount: number }> {
    const [items, total] = await this.exerciseRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
      relations: {
        muscleGroups: true,
      },
    });

    return { items, total, pagesCount: Math.ceil(total / limit) };
  }

  async getExerciseById(id: number): Promise<Exercise | null> {
    return this.exerciseRepository.findOne({ where: { id } });
  }
}
