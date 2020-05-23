import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  Exclusion,
  BeforeUpdate,
} from 'typeorm';
import { timeRole, stimeRole } from 'src/core/enums/time.enum';
import { isNull } from 'util';

@Entity()
export class pcourse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  coursename: string;

  @Column({ type: 'text' })
  teachername: string;

  @Column({ type: 'text' })
  classname: string;

  @Column({ type: 'int' })
  classnumber: number;

  @Column({ type: 'int' })
  times: number;

  @Column({ type: 'text' })
  classroomname: string;

  @Column({ type: 'int' })
  week: number;

  @Column({ type: 'enum', enum: stimeRole })
  time: string;

  @Column({nullable: true})
  optional:string;

  @Column({nullable: true})
  select:string;
}
