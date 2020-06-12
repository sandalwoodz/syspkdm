import { Injectable, BadRequestException } from '@nestjs/common';
import { classes } from './class.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { classDto } from './class.dto';

@Injectable()
export class ClassService {
    constructor(
        @InjectRepository(classes)
        private readonly classRepository: Repository<classes>,
      ) {}

//存储数据
  async store(data: classDto) {

    const { classname } = data;
    const classes = await this.classRepository.findOne({ classname });

    if (classes) {
      throw new BadRequestException('班级已存在');
    }
    const entity = await this.classRepository.create(data);
    await this.classRepository.save(entity);
    return entity;
  }


  //查看所有数据
  async index() {
    const entities = await this.classRepository.find();
    return entities;
  }
}
