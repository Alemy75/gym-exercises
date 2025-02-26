import { MuscleGroup } from '../muscle-group/muscle-group.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class Exercise {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('text')
  description: string;

  @ManyToMany(() => MuscleGroup)
  @JoinTable()
  muscleGroups: MuscleGroup[];
}
