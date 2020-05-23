import { Module } from '@nestjs/common';
import { RcourseController } from './rcourse.controller';
import { RcourseService } from './rcourse.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { rcourse } from './rcourse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([rcourse])],
  controllers: [RcourseController],
  providers: [RcourseService],
  exports: [RcourseService],
})
export class RcourseModule {}
