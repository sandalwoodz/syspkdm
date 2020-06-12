import { Controller, Post, UseGuards, UseInterceptors, UploadedFile, ParseIntPipe,Get ,Param,Res} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileDto } from '../fileupload/fileupload.dto';
import { Response } from 'express';
import { ApiTags, ApiOperation, ApiHeader} from '@nestjs/swagger';
import { User } from 'src/core/decorators/users.decorators';
import { users } from '../users/users.entity';
import { AvatarService } from './avatar.service';

@ApiTags('头像')
@ApiHeader({
  name:'authoriation',
  required: true,
  description: '本次请求请带上token',
})

@Controller('avatar')
export class AvatarController {
    constructor(
        private readonly avatarService: AvatarService
    ){}

    @Post()
    @ApiOperation({ summary: '头像上传' })
    @UseGuards(AuthGuard('jwt'))
    @UseInterceptors(FileInterceptor('avatar'))
    async store(@UploadedFile() data:FileDto,@User() user:users){
        return await this.avatarService.store(data,user)
    }

    @Get(':id')
    @ApiOperation({ summary: '头像获取' })
  async serve(
    @Param('id', ParseIntPipe) id: number,
    @Res() res: Response
  ) {
    const file = await this.avatarService.show(id);
    
    res.sendfile(file.filename, {
      root: 'uploads/avatar',
      headers: {
        'Content-type': file.mimetype
      }
    });
  }
}