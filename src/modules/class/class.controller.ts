import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common';
import { ClassService } from './class.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AccessGuard } from 'src/core/guards/access.guard';
import { Permissions } from 'src/core/decorators/permissions.decorator';
import { UserRole } from 'src/core/enums/user-role.enum';
import { classDto } from './class.dto';



@Controller('class')
@ApiTags('班级')
export class ClassController {
    constructor(private readonly classService: ClassService) {}

    @Post()
    @ApiOperation({ summary: '添加班级' })
    @UseGuards(AuthGuard('jwt'), AccessGuard)
    @Permissions({ role: UserRole.ADMIN }) //管理员权限
    async store(@Body() data: classDto) {
      return await this.classService.store(data);
    }
  
    @Get()
    @ApiOperation({ summary: '查看班级名称' })
    async index() {
      return await this.classService.index();
    }
}
