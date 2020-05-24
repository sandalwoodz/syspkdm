import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { rcourse } from '../rcourse/rcourse.entity';
import { File } from '../fileupload/fileupload.entity';
import { Avatar } from '../avatar/avatar.entity';


@Entity()
// eslint-disable-next-line @typescript-eslint/class-name-casing
export class teachers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  jobnumber: string;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text' })
  college: string;

  @OneToMany(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    type => rcourse,
    rcourse => rcourse.teachers,
  )
  rcourses:[];

  // @OneToMany(
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   type => Avatar,
  //   Avatar => Avatar.teachers,
  // )
  // avatar: Avatar[];


}
