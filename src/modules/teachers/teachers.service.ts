import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { teachers } from './teachers.entity';
import { Repository } from 'typeorm';
import { teachersDto } from './teachers.dto';

@Injectable()
export class TeachersService {
  constructor(
    @InjectRepository(teachers)
    private readonly teachersRepository: Repository<teachers>,
  ) {}

  //存储数据
  async store(data: teachersDto) {
    const entity = await this.teachersRepository.create(data);
    await this.teachersRepository.save(entity);
    return entity;
  }

  //查看所有数据
  async index() {
    const entities = await this.teachersRepository.find();
    return entities;
  }

  //条件查询
  async show(name: string) {
    const entity = await this.teachersRepository.findOne({name:name}, 
      //{ relations: ['rcourses'],}
    );
    return entity;
  }

  //更新数据
  async updata(id: string, data: teachersDto) {
    const result = await this.teachersRepository.update(id, data);
    return result;
  }

  //删除数据
  async destroy(id: string) {
    const result = await this.teachersRepository.delete(id);
  }

  // async find(jobnumber: string) {
  //   const qb = this.teachersRepository
  //     .createQueryBuilder('teachers')
  //     .where('teachers.jobnumber = :jobnumber', { jobnumber })
  //     // .leftJoinAndSelect('teachers.rcourses', 'rcourses')
  //     // .leftJoinAndSelect('teachers.avatar', 'avatar');

  //   return await qb.getMany();
  // }
  async find(jobnumber: string) {
    const entity = await this.teachersRepository.findOne({jobnumber:jobnumber}, 
      { relations: ['rcourses'],}
    );
    return entity;
  }

  async getrcourseId(id) {
    return await this.teachersRepository.findOne(id, {relations: ['rcourses']});
  }
}
