import { Module } from '@nestjs/common';
import { ExerciseModule } from './exercise/exercise.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CONNECTION } from './connection';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...CONNECTION,
      autoLoadEntities: true,
      synchronize: false,
    }),
    ExerciseModule,
  ],
})
export class AppModule {}
