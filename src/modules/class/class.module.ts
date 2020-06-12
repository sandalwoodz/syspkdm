import { Module } from '@nestjs/common';
import { ClassController } from './class.controller';
import { ClassService } from './class.service';
import { classes } from './class.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([classes]),
],
  controllers: [ClassController],
  providers: [ClassService],
  exports:[ClassService]
})
export class ClassModule {}
