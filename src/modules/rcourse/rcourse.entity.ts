import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  RelationId,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { teachers } from '../teachers/teachers.entity';
import { pcourse } from '../pcourse/pcourse.entity';

@Entity()
// eslint-disable-next-line @typescript-eslint/class-name-casing
export class rcourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column(  { type: 'text'  })
  coursename: string;

  @Column({ type: 'text' })
  teachername: string;

  @Column('simple-array' )
  classname: string[];

  @Column({ type: 'int' })
  classnumber: number;

  @Column({ type: 'int' })
  times: number;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    types => teachers,
    teachers => teachers.rcourses,{onDelete: 'NO ACTION'}
  )
  @JoinColumn({name:'teachersId'})
  teachersId: teachers;

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => pcourse,
    pcourse => pcourse.rcourseId,
  )
  pcourse:[];
}
