import { Controller, Post, UseGuards, Body, Get } from '@nestjs/common';
import { CourseService } from './course.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AccessGuard } from 'src/core/guards/access.guard';
import { Permissions } from 'src/core/decorators/permissions.decorator';
import { UserRole } from 'src/core/enums/user-role.enum';
import { courseDto } from './course.dto';

@Controller('course')
@ApiTags('课程')
export class CourseController {
    constructor(private readonly courseService: CourseService) {}

    @Post()
    @ApiOperation({ summary: '添加课程' })
    @UseGuards(AuthGuard('jwt'), AccessGuard)
    @Permissions({ role: UserRole.ADMIN }) //管理员权限
    async store(@Body() data: courseDto) {
      return await this.courseService.store(data);
    }
  
    @Get()
    @ApiOperation({ summary: '查看所有课程名称' })
    async index() {
      return await this.courseService.index();
    }
}
