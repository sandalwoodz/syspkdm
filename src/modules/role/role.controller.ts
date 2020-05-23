import { Controller, Post, Body } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleDto } from './role.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('role')
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post()
  @ApiOperation({ summary: '添加角色' })
  async store(@Body() data: RoleDto) {
    return await this.roleService.store(data);
  }
}
