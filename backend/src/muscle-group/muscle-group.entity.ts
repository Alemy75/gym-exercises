import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MuscleGroup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('text')
  description: string;
}
