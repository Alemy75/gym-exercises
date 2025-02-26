import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { ExerciseController } from './exercise.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Exercise } from './exercise.entity';
import { MuscleGroup } from '../muscle-group/muscle-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exercise, MuscleGroup])],
  providers: [ExerciseService],
  controllers: [ExerciseController],
})
export class ExerciseModule {}
