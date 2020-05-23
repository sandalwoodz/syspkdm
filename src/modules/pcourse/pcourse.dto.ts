import { ApiProperty } from '@nestjs/swagger';
import { timeRole, stimeRole } from 'src/core/enums/time.enum';

export class pcourseDto {
  @ApiProperty()
  readonly coursename: string;
  @ApiProperty()
  readonly teachername: string;
  @ApiProperty()
  readonly classname: string;
  @ApiProperty()
  readonly classnumber: number;
  @ApiProperty()
  readonly times: number;
  @ApiProperty()
  readonly classroomname: string;
  @ApiProperty()
  readonly week: number;
  @ApiProperty()
  readonly time: timeRole;
  @ApiProperty()
  readonly optional: string;
  @ApiProperty()
  readonly select: string;

}

export class spcourseDto {
  @ApiProperty()
  readonly coursename: string;
  @ApiProperty()
  readonly teachername: string;
  @ApiProperty()
  readonly classname: string;
  @ApiProperty()
  readonly classnumber: number;
  @ApiProperty()
  readonly times: number;
  @ApiProperty()
  readonly classroomname: string;
  @ApiProperty()
  readonly week: number;
  @ApiProperty()
  readonly time: stimeRole;
  @ApiProperty()
  readonly optional: string;
  @ApiProperty()
  readonly select: string;
}
