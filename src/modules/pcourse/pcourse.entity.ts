import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  Exclusion,
  BeforeUpdate,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { timeRole, stimeRole } from 'src/core/enums/time.enum';
import { isNull } from 'util';
import { rcourse } from '../rcourse/rcourse.entity';

@Entity()
// eslint-disable-next-line @typescript-eslint/class-name-casing
export class pcourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' ,nullable: true})
  classroomname: string;

  @Column({type: 'int',nullable: true })
  weeks: number;

  @Column({type: 'int',nullable: true })
  week: number;

  @Column({type: 'int',nullable: true })
  time: number;

  @Column({nullable: true})
  optional:string;

  @Column({nullable: true})
  select:string;

  @ManyToOne(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    types => rcourse,
    rcourse => rcourse.pcourse,{onDelete: 'NO ACTION'}
  )
  @JoinColumn({name:'rcourseId'})
  rcourseId: rcourse
 
}
