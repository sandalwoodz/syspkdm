import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Avatar } from './avatar.entity';
import { Repository } from 'typeorm';
import { FileDto } from '../fileupload/fileupload.dto';
import { users } from '../users/users.entity';

@Injectable()
export class AvatarService {
    constructor(
        @InjectRepository(Avatar)
        private readonly avatarRepository: Repository<Avatar>
    ){}

    async store(data:FileDto,user:users){
        return await this.avatarRepository.save({...data,user});
    }

    async show(id: number) {
        return await this.avatarRepository.findOne(id);
      }

      async find(userId: string) {
        const qb = this.avatarRepository
          .createQueryBuilder('avatar')
          .where('avatar.userId = :userId', { userId })
        //   .leftJoinAndSelect('avatar.rcourses', 'rcourses')
        //   .leftJoinAndSelect('avatar.avatar', 'avatar');
        return await qb.getMany();
      }
}
