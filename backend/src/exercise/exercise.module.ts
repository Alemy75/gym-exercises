import { Module } from '@nestjs/common';
import { ExerciseService } from './exercise.service';
import { DatabaseModule } from '../database/database.module';
import { exerciseProviders } from './exercise.providers';
import { ExerciseController } from './exercise.controller';

@Module({
  imports: [DatabaseModule],
  providers: [ExerciseService, ...exerciseProviders],
  controllers: [ExerciseController],
})
export class ExerciseModule {}
