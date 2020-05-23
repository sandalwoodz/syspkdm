import { Module ,BadRequestException} from '@nestjs/common';
import { AvatarService } from './avatar.service';
import { AvatarController } from './avatar.controller';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Avatar } from './avatar.entity';
import { AuthModuleOptions } from '@nestjs/passport';
import { LoginModule } from '../login/login.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([Avatar]),
    MulterModule.register({
      dest: './uploads/avatar',
      fileFilter: (req, file, callback) => {
        const mimetypes = [
          'image/png',
          'image/jpeg',
          'image/jpg', 
        ];

        const allowed = mimetypes.some(type => type === file.mimetype);

        if (allowed) {
          callback(null, true);
        } else {
          callback(new BadRequestException('不支持上传此类型的文件。'), false);
        }
      }
    }),
    LoginModule,AuthModuleOptions
  ],
  providers: [AvatarService],
  controllers: [AvatarController]
})
export class AvatarModule {}
