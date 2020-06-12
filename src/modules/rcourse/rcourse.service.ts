import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { rcourse } from './rcourse.entity';
import { Repository } from 'typeorm';
import { rcourseDto } from './rcourse.dto';
import { TeachersService } from '../teachers/teachers.service';

@Injectable()
export class RcourseService {
  constructor(
    @InjectRepository(rcourse)
    private readonly rcourseRepository: Repository<rcourse>,
    private readonly teacherSversice: TeachersService
  ) {}

  //存储数据
  async store(data: rcourseDto) {
    const pa: any[] = await this.rcourseRepository.find();

    for(let i = 0;i<pa.length;i++){
    if (data.coursename==pa[i].coursename) {
          if (data.teachername===pa[i].teachername) {
      throw new BadRequestException('安排教学任务重复');
    }}}
    const entity = await this.rcourseRepository.create(data);
    await this.rcourseRepository.save(entity);
    return entity;
  }


  //查看所有数据
  async index() {
    const entities = await this.rcourseRepository.find({
      relations: ['teacherId'],
    });
    return entities;
  }

  //更新数据
  async updata(id: string, data: rcourseDto) {
    const result = await this.rcourseRepository.update(id, data);
    return result;
  }

  //删除数据
  async destroy(id: string) {
    const result = await this.rcourseRepository.delete(id);
  }

  //按教师名查询任课课程
  async find(teachername: string) {
    const qb = this.rcourseRepository
      .createQueryBuilder('rcourse')
      .where('rcourse.teachername = :teachername', { teachername });

    return await qb.getMany();
  }
}
