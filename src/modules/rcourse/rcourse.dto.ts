import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class rcourseDto {
  @ApiProperty()
   coursename: string;
  @ApiProperty()
   teachername: string;
  @ApiProperty()
   classname: string;
  @ApiProperty()
   classnumber: number;
  @ApiProperty()
   times: number;
  @ApiProperty()
   teachersId: number;
  // teachers: import("f:/syspkdm/src/modules/teachers/teachers.entity").teachers;

}
