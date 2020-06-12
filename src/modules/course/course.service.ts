import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { course } from './course.entity';
import { Repository } from 'typeorm';
import { courseDto } from './course.dto';

@Injectable()
export class CourseService {
    constructor(
        @InjectRepository(course)
        private readonly courseRepository: Repository<course>,
      ) {}

//存储数据
  async store(data: courseDto) {
    const { coursename } = data;
    const course = await this.courseRepository.findOne({ coursename });

    if (course) {
      throw new BadRequestException('该课程已存在');
    }
    const entity = await this.courseRepository.create(data);
    await this.courseRepository.save(entity);
    return entity;
  }


  //查看所有数据
  async index() {
    const entities = await this.courseRepository.find();
    return entities;
  }

    
}
