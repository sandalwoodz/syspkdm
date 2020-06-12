import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { RcourseService } from './rcourse.service';
import { rcourseDto } from './rcourse.dto';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AccessGuard } from 'src/core/guards/access.guard';
import { Permissions } from 'src/core/decorators/permissions.decorator';
import { UserRole } from 'src/core/enums/user-role.enum';

@Controller('rcourse')
@ApiTags('任课课表')
@ApiHeader({
  name:'authoriation',
  required: true,
  description: '本次请求请带上token',
})
export class RcourseController {
  constructor(private readonly rcourseService: RcourseService) {}

  @Post()
  @ApiOperation({ summary: '添加任课课程' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.ADMIN }) //管理员权限
  async store(@Body() data: rcourseDto) {
    return await this.rcourseService.store(data);
  }

  @Get()
  @ApiOperation({ summary: '查看所有任课课程' })
  async index() {
    return await this.rcourseService.index();
  }

  @Put(':id')
  @ApiOperation({ summary: '修改任课课程信息' })
  async updata(@Param('id') id: string, @Body() data: rcourseDto) {
    return await this.rcourseService.updata(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除任课课程' })
  async destroy(@Param('id') id: string) {
    return await this.rcourseService.destroy(id);
  }

  @Get(':teachername')
  @ApiOperation({ summary: '教师任课课程' })
  @UseGuards(AuthGuard('jwt'))
  async find(@Param('teachername') teachername: string) {
    return await this.rcourseService.find(teachername);
  }
}
