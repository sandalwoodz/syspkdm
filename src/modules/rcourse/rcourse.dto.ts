import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class rcourseDto {
  @ApiProperty({description:'课程名'})
   coursename: string;
  @ApiProperty({description:'教师名'})
   teachername: string;
  @ApiProperty({description:'班级'})
   classname: string[];
  @ApiProperty({description:'上课班级数量'})
   classnumber: number;
  @ApiProperty({description:'学时'})
   times: number;
  // @ApiProperty({description:'关联的教师ID'})
  //  teachersId: number;
  // // teachers: import("f:/syspkdm/src/modules/teachers/teachers.entity").teachers;

}
