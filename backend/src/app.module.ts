import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ExerciseModule } from './exercise/exercise.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ExerciseModule,
    DatabaseModule,
  ],
})
export class AppModule {}
