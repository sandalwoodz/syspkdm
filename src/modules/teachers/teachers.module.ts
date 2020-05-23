import { Module } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { TeachersController } from './teachers.controller';
import { teachers } from './teachers.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [TypeOrmModule.forFeature([teachers])],
  providers: [TeachersService],
  controllers: [TeachersController],
  exports: [TeachersService],
})
export class TeachersModule {}
