import { Module, BadRequestException } from '@nestjs/common';
import { FileController } from './fileupload.controller';
import { FileService } from './fileupload.service';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { File } from './fileupload.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      File
    ]),
    MulterModule.register({
      dest: './uploads',
      fileFilter: (req, file, callback) => {
        const mimetypes = [
          'image/png',
          'image/jpeg',
          'application/vnd.ms-excel',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        ];
        const allowed = mimetypes.some(type => type === file.mimetype);
        if (allowed) {
          callback(null, true);
        } else {
          callback(new BadRequestException('不支持上传此类型的文件。'), false);
        }
      }
    })
  ],
  controllers: [FileController],
  providers: [FileService]
})
export class FileuploadModule { }