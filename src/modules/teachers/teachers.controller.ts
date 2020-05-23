import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Patch,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { teachersDto } from './teachers.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AccessGuard } from 'src/core/guards/access.guard';
import { Permissions } from 'src/core/decorators/permissions.decorator';
import { UserRole } from 'src/core/enums/user-role.enum';
import { RemoveEssayDto } from './teachers.arrydto';

@Controller('teachers')
@ApiTags('教师')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Post()
  @ApiOperation({ summary: '添加教师信息' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.ADMIN }) //管理员权限
  @UsePipes(ValidationPipe)
  async store(@Body() data: teachersDto) {
    return await this.teachersService.store(data);
  }

  // @Post('s')
  // @ApiOperation({ summary: '添加教师信息' })
  // @UseGuards(AuthGuard('jwt'), AccessGuard)
  // @Permissions({ role: UserRole.ADMIN }) //管理员权限
  // @UsePipes(ValidationPipe)
  // async arrystore(@Body() data: RemoveEssayDto) {
  //   return await this.teachersService.arrystore(data)
  // }

  @Get()
  @ApiOperation({ summary: '查看所有教师信息' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.ADMIN }) //管理员权限
  async index() {
    return await this.teachersService.index();
  }

  @Get('name/:name')
  async show(@Param('name') name: string) {
    return await this.teachersService.show(name);
  }

  @Put(':id')
  @ApiOperation({ summary: '修改教师信息' })
  @UseGuards(AuthGuard('jwt'))
  async updata(@Param('id') id: string, @Body() data: teachersDto) {
    return await this.teachersService.updata(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除教师信息' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.ADMIN }) //管理员权限
  async destroy(@Param('id') id: string) {
    return await this.teachersService.destroy(id);
  }

  @Get(':jobnumber')
  @ApiOperation({ summary: '按工号查看教师信息' })
  @UseGuards(AuthGuard('jwt'))
  async find(@Param('jobnumber') jobnumber: string) {
    return await this.teachersService.find(jobnumber);
  }
}
