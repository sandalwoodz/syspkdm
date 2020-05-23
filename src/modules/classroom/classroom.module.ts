import { Module } from '@nestjs/common';
import { ClassroomController } from './classroom.controller';
import { ClassroomService } from './classroom.service';
import { classroom } from './classroom.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([classroom])],
  controllers: [ClassroomController],
  providers: [ClassroomService],
  exports: [ClassroomService],
})
export class ClassroomModule {}
