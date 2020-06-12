import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class classDto {
  @ApiProperty({description:'班级名'})
  classname: string;
  @ApiProperty({description:'班级人数'})
   number: number;


}
