import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pcourse } from './pcourse.entity';
import { Repository, Like } from 'typeorm';
import { pcourseDto, spcourseDto } from './pcourse.dto';

@Injectable()
export class PcourseService {
  constructor(
    @InjectRepository(pcourse)
    private readonly pcourseRepository: Repository<pcourse>,
  ) {}

  //存储数据
  async store(data: pcourseDto) {
    const entity = await this.pcourseRepository.create(data);
    await this.pcourseRepository.save(entity);
    return entity;
  }

  async sstore(data: spcourseDto) {
    const entity = await this.pcourseRepository.create(data);
    await this.pcourseRepository.save(entity);
    return entity;
  }

  //查看所有数据
  async index() {
    const entities = await this.pcourseRepository.find()
    return entities;
  }

  //更新数据
  async updata(id: string, data: pcourseDto) {
    const result = await this.pcourseRepository.update(id, data);
    return result;
  }

  //删除数据
  async destroy(id: string) {
    const result = await this.pcourseRepository.delete(id);
  }

  async find(classname: string, week: number) {
    const qb = this.pcourseRepository
      .createQueryBuilder('pcourse')
      .where('pcourse.classname like :name', { name: '%' + classname + '%' })
      .andWhere('pcourse.week= :week', { week });

    return await qb.getMany();
  }

  async findtwo(classroomname: string, week: number) {
    const qb = this.pcourseRepository
      .createQueryBuilder('pcourse')
      .where('pcourse.classroomname = :classroomname', { classroomname })
      .andWhere('pcourse.week= :week', { week });

    return await qb.getMany();
  }

  async findthree(classroomname: string) {
    const qb = this.pcourseRepository
      .createQueryBuilder('pcourse')
      .where('pcourse.classroomname = :classroomname', { classroomname })

    return await qb.getMany();
  }
}
