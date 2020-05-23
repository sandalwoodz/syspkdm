import { Injectable } from '@nestjs/common';
import { FileDto } from './fileupload.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { File } from './fileupload.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(File)
    private readonly fileRepository: Repository<File>
  ) { }

  async store(data: FileDto) {
    return await this.fileRepository.save(data);
  }

  async show(id: number) {
    return await this.fileRepository.findOne(id);
  }
}