import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  
  @Entity()
  // eslint-disable-next-line @typescript-eslint/class-name-casing
  export class classes {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column(  { type: 'text'  })
    classname: string;
  
    @Column({ type: 'int' })
    number: number;
  
  }
  