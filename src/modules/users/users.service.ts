import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { users } from './users.entity';
import { Repository } from 'typeorm';
import { UserDto, UpdatePasswordDto } from './users.dto';


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(users)
    private readonly usersRepository: Repository<users>,
  ) {}

  async index() {
    const entities = await this.usersRepository.find();
    return entities;
  }

  async store(data: UserDto) {
    const { name } = data;
    const user = await this.usersRepository.findOne({ name });

    if (user) {
      throw new BadRequestException('用户已存在');
    }
    const entity = await this.usersRepository.create(data);
    await this.usersRepository.save(entity);
    return entity;
  }

  //条件查询
  async show(name: string) {
    const entity = await this.usersRepository.findOne({name:name});

    if (!entity) {
      throw new NotFoundException('没找到用户！');
    }
    return entity;
  }

  //更新数据
  async updataPassword(id: string, data: UpdatePasswordDto) {
    const { password, newpasssword } = data;
    const entity = await this.usersRepository.findOne(id);

    if (!entity) {
      throw new NotFoundException('没有找到用户');
    }

    const pass = await entity.comparePassword(password);

    if (!pass) {
      throw new BadRequestException('密码验证失败，请重新输入正确密码！');
    }

    entity.password = newpasssword;

    return await this.usersRepository.save(entity);
  }

  //删除数据
  async destroy(id: string) {
    const result = await this.usersRepository.delete(id);
    return result;
  }

  async findByName(name: string, password?: boolean) {
    const queryBuilder = await this.usersRepository.createQueryBuilder('users');

    queryBuilder
      .where('users.name = :name', { name })
      .leftJoinAndSelect('users.roles', 'roles');

    if (password) {
      queryBuilder.addSelect('users.password');
    }

    const entity = queryBuilder.getOne();

    return entity;
  }

  async update(name: string, data: UserDto) {
    const { roles } = data;

    const entity = await this.usersRepository.findOne({name:name});
    if (roles) {
      entity.roles = roles;
    }

    return await this.usersRepository.save(entity);
  }

}