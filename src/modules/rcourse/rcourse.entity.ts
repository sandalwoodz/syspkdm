import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  RelationId,
} from 'typeorm';
import { teachers } from '../teachers/teachers.entity';

@Entity()
// eslint-disable-next-line @typescript-eslint/class-name-casing
export class rcourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  coursename: string;

  @Column({ type: 'text' })
  teachername: string;

  @Column({ type: 'text' })
  classname: string;

  @Column({ type: 'int' })
  classnumber: number;

  @Column({ type: 'int' })
  times: number;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    types => teachers,
    teachers => teachers.rcourses,{onDelete: 'NO ACTION'}
  )
  teachers: teachers;

  @RelationId((rcourse: rcourse) => rcourse.teachers)
  teachersId: number;
}
