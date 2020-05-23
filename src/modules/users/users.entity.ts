import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  BeforeUpdate,
  JoinTable,
  ManyToMany,
  OneToMany,

} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Exclude } from 'class-transformer';
import { UserRole } from 'src/core/enums/user-role.enum';
import { Role } from '../role/role.entity';
import { Avatar } from '../avatar/avatar.entity';
@Entity()
// eslint-disable-next-line @typescript-eslint/class-name-casing
export class users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { unique: true })
  name: string;

  @Column()
  @Exclude()
  password: string;

  // @Column({type:'enum',enum:UserRole})
  // role:UserRole;

  @CreateDateColumn()
  create: Date;

  @OneToMany(
    type => Avatar,
    avatar =>avatar.user,
  )
  avatar: Avatar[];

  @ManyToMany(
    type => Role,
    Role => Role.users,
  )
  @JoinTable()
  roles: Role[];

  @BeforeInsert()
  @BeforeUpdate()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 12);
  }

  async comparePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}
