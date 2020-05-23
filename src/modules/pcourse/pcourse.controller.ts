import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  UseGuards,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { PcourseService } from './pcourse.service';
import { pcourseDto, spcourseDto } from './pcourse.dto';
import { ApiTags, ApiOperation, ApiProperty } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { AccessGuard } from 'src/core/guards/access.guard';
import { Permissions } from 'src/core/decorators/permissions.decorator';
import { UserRole } from 'src/core/enums/user-role.enum';
import { TimeGuard } from 'src/core/guards/time.guard';

@Controller('pcourse')
@ApiTags('排课课表')
export class PcourseController {
  constructor(private readonly pcourseService: PcourseService) {}

  @Post()
  @ApiOperation({ summary: '增加排课信息' })
  @UseGuards(AuthGuard('jwt'), AccessGuard, TimeGuard)
  @Permissions({ role: UserRole.TEACHER }) //教师权限
  async store(@Body() data: pcourseDto) {
    return await this.pcourseService.store(data);
  }

  @Post('s')
  @ApiOperation({ summary: '增加排课信息(特殊时段)' })
  @UseGuards(AuthGuard('jwt'), AccessGuard)
  @Permissions({ role: UserRole.SPECIAL }) //教师特殊权限(能在周末及中午时间段上课)
  async sstore(@Body() data: spcourseDto) {
    return await this.pcourseService.sstore(data);
  }

  @ApiOperation({ summary: '查询排课信息' })
  @Get()
  async index() {
    return await this.pcourseService.index();
  }

  @ApiOperation({ summary: '修改排课信息' })
  @Put(':id')
  async updata(@Param('id') id: string, @Body() data: pcourseDto) {
    return await this.pcourseService.updata(id, data);
  }

  @Delete(':id')
  async destroy(@Param('id') id: string) {
    return await this.pcourseService.destroy(id);
  }

  @ApiOperation({ summary: '按班级/周期' })
  @Get(':classname/:week')
  async find(
    @Param('classname') classname: string,
    @Param('week', ParseIntPipe) week: number,
  ) {
    return await this.pcourseService.find(classname, week);
  }

  @ApiOperation({ summary: '按教室/周期查询' })
  @Get('p/:classroomname/:week')
  async findtwo(
    @Param('classroomname') classroomname: string,
    @Param('week', ParseIntPipe) week: number,
  ) {
    return await this.pcourseService.findtwo(classroomname, week);
  }

  @ApiOperation({ summary: '教室占用情况' })
  @Get(':classroomname')
  async findthree(
    @Param('classroomname') classroomname: string,
  ) {
    return await this.pcourseService.findthree(classroomname);
  }
}
