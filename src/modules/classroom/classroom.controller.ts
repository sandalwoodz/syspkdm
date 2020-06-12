import {
  Controller,
  Post,
  Get,
  Body,
  Put,
  Delete,
  Param,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { ClassroomService } from './classroom.service';
import { classroomDto } from './classroom.dto';
import { AuthGuard } from '@nestjs/passport';
import { AccessGuard } from 'src/core/guards/access.guard';
import { Permissions } from 'src/core/decorators/permissions.decorator';
import { UserRole } from 'src/core/enums/user-role.enum';
import { ApiTags, ApiOperation, ApiHeader } from '@nestjs/swagger';

@Controller('classroom')
@ApiTags('实验室')
@ApiHeader({
  name:'authoriation',
  required: true,
  description: '本次请求请带上token',
})
export class ClassroomController {
  constructor(private readonly classroomService: ClassroomService) {}

  @Post()
  @ApiOperation({ summary: '添加实验室 传输的数据为classroomdto' })
  @UseGuards(AuthGuard('jwt'))
  async store(@Body() data) {
    return await this.classroomService.store(data);
  }

  @Get()
  @ApiOperation({ summary: '查看所有实验室' })
  @UseGuards(AuthGuard('jwt'))
  async index() {
    return await this.classroomService.index();
  }

  // @Get('id/:id')
  // @ApiOperation({ summary: '查看所有实验室' })
  // async show(@Param('id') id: string) {
  //   return await this.classroomService.show(id);
  // }

  @Put(':id')
  @ApiOperation({ summary: '修改实验室信息' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.ADMIN }) //管理员权限
  async updata(@Param('id') id: string, @Body() data: classroomDto) {
    return await this.classroomService.updata(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除实验室' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.ADMIN }) //管理员权限
  async destroy(@Param('id') id: string) {
    return await this.classroomService.destroy(id);
  }

  @Get(':name')
  @ApiOperation({ summary: '按名字查看实验室信息' })
  async find(@Param('name') name: string) {
    return await this.classroomService.find(name);
  }
}
