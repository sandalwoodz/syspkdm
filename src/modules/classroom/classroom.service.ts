import { Injectable, BadRequestException } from '@nestjs/common';
import { classroom } from './classroom.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { classroomDto } from './classroom.dto';

@Injectable()
export class ClassroomService {
  constructor(
    @InjectRepository(classroom)
    private readonly classroomRepository: Repository<classroom>,
  ) {}

  //存储数据
  async store(data: classroomDto) {
    const { name } = data;
    const classroom = await this.classroomRepository.findOne({ name });

    if (classroom) {
      throw new BadRequestException('教室已存在');
    }
    const entity = await this.classroomRepository.create(data);
    await this.classroomRepository.save(entity);
    return entity;
  }

  //查看所有数据
  async index() {
    const entities = await this.classroomRepository.find();
    return entities;
  }

  //条件查询
  async show(id: string) {
    const entity = await this.classroomRepository.findOne(id);
    return entity;
  }

  //更新数据
  async updata(id: string, data: classroomDto) {
    const result = await this.classroomRepository.update(id, data);
    return result;
  }

  //删除数据
  async destroy(id: string) {
    const result = await this.classroomRepository.delete(id);
  }

  async find(name: string) {
    const qb = this.classroomRepository
      .createQueryBuilder('classroom')
      .where('classroom.name = :name', { name });

    return await qb.getOne();
  }
}
