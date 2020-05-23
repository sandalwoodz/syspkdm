import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  OneToOne,
} from 'typeorm';
import { UserRole } from 'src/core/enums/user-role.enum';
import { users } from '../users/users.entity';

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: UserRole, unique: true })
  name: UserRole;

  @Column()
  alias: string;

  @ManyToMany(
    type => users,
    users => users.roles,
  )
  users: users[];
}
