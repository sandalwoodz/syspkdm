import { Module } from '@nestjs/common';
import { PcourseService } from './pcourse.service';
import { PcourseController } from './pcourse.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pcourse } from './pcourse.entity';

@Module({
  imports: [TypeOrmModule.forFeature([pcourse])],
  providers: [PcourseService],
  controllers: [PcourseController],
  exports: [PcourseService],
})
export class PcourseModule {}
