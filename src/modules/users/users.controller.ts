import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  ParseIntPipe,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './users.service';
import { UserDto, UpdatePasswordDto } from './users.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { UserRole } from 'src/core/enums/user-role.enum';
import { AuthGuard } from '@nestjs/passport';
import { AccessGuard } from 'src/core/guards/access.guard';
import { Permissions } from 'src/core/decorators/permissions.decorator';


@Controller('user')
@ApiTags('用户')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('index')
  @ApiOperation({ summary: '查看用户' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.ADMIN }) //管理员权限
  async index() {
    return await this.userService.find(name)
  }

  @Post()
  @ApiOperation({ summary: '添加用户' })
  async store(@Body() data) {
    return await this.userService.store(data);
  }

  @Get(':name')
  @UseInterceptors(ClassSerializerInterceptor)
  async show(@Param('name') name: string) {
    return await this.userService.show(name)
  }

  @Put(':id/password')
  @ApiOperation({ summary: '用户修改密码' })
  @UseInterceptors(ClassSerializerInterceptor)
  async updatepassword(
    @Param('id') id: string,
    @Body() data: UpdatePasswordDto,
  ) {
    return await this.userService.updataPassword(id, data);
  }

  @Delete(':id')
  @ApiOperation({ summary: '删除用户' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.ADMIN }) //管理员权限
  async destroy(@Param('id') id: string) {
    return await this.userService.destroy(id);
  }

  @Put(':name')
  @ApiOperation({ summary: '给用户添加角色' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.ADMIN }) //管理员权限
  async update(@Param('name') name: string , @Body() data: UserDto) {
    return await this.userService.update(name, data);
  }
}
