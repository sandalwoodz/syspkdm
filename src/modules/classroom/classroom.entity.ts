import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  Exclusion,
  BeforeUpdate,
} from 'typeorm';

@Entity()
export class classroom {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  name: string;

  @Column({ type: 'text' })
  place: string;

  @Column({ type: 'int' })
  capacity: number;
}
