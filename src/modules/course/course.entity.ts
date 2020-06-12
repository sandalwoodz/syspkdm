import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity()
  // eslint-disable-next-line @typescript-eslint/class-name-casing
  export class course {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column(  { type: 'text'  })
    coursename: string;
  
    @Column({ type: 'int' })
    times: number;
  
  }
  