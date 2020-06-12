import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, RelationId } from 'typeorm'
import { users } from '../users/users.entity'
import { User } from 'src/core/decorators/users.decorators'

@Entity()
export class Avatar{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    filename:string

    @Column()
    mimetype:string

    @ManyToOne(type => users,users=> users.avatar//,{nullable : false}
        )
    user:users;

    @RelationId((Avatar:Avatar) => Avatar.user)
    userId:number
}