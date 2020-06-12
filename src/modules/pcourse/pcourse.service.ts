import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { pcourse } from './pcourse.entity';
import { Repository, Like } from 'typeorm';
import { pcourseDto, spcourseDto } from './pcourse.dto';
import passport = require('passport');

@Injectable()
export class PcourseService {
  constructor(
    @InjectRepository(pcourse)
    private readonly pcourseRepository: Repository<pcourse>,
  ) {}

  //存储数据
  async store(data: pcourseDto) {
    const pa: any[] = await this.pcourseRepository.find();

    for(let i = 0;i<pa.length;i++){
    if (data.classroomname===pa[i].classroomname) {
      if (data.weeks===pa[i].weeks) {
        if (data.week===pa[i].week) {
          if (data.time===pa[i].time) {
      throw new BadRequestException('此时间段不能选择');
    }}}}}
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
    const entities = await this.pcourseRepository.find({relations:['rcourseId']})
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

  async find(classname: string, weeks: number) {
    const qb = this.pcourseRepository
      .createQueryBuilder('pcourse')
      .where('pcourse.classname like :name', { name: '%' + classname + '%' })
      .andWhere('pcourse.weesk= :weeks', { weeks })
      .leftJoinAndSelect('pcourse.rcourseId', 'rcourseId')

    return await qb.getMany();
  }

  async findtwo(classroomname: string, weeks: number) {
    const qb = this.pcourseRepository
      .createQueryBuilder('pcourse')
      .where('pcourse.classroomname = :classroomname', { classroomname })
      .andWhere('pcourse.weeks= :weeks', { weeks })
      .leftJoinAndSelect('pcourse.rcourseId', 'rcourseId')

    return await qb.getMany();
  }

  async findthree(classroomname: string) {
    const qb = this.pcourseRepository
      .createQueryBuilder('pcourse')
      .where('pcourse.classroomname = :classroomname', { classroomname })
      .leftJoinAndSelect('pcourse.rcourseId', 'rcourseId')

    return await qb.getMany();
  }


  async findweek(weeks: number) {
    const qb = this.pcourseRepository
      .createQueryBuilder('pcourse')
      .where('pcourse.weeks = :weeks', { weeks })
      .leftJoinAndSelect('pcourse.rcourseId', 'rcourseId')

    return await qb.getMany();
  }
}
