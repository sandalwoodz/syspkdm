/* eslint-disable @typescript-eslint/class-name-casing */
import { ApiProperty } from '@nestjs/swagger';

export class pcourseDto {
  @ApiProperty()
  readonly classroomname: string;
  @ApiProperty()
  readonly weeks: number;
  @ApiProperty()
  readonly week: number;
  @ApiProperty()
  readonly time: number;
  @ApiProperty({description:'可以为空'})
  readonly optional: string;
  @ApiProperty({description:'可以为空'})
  readonly select: string;

}

export class spcourseDto {

  @ApiProperty()
  readonly classroomname: string;
  @ApiProperty()
  readonly weeks: number;
  @ApiProperty()
  readonly week: number;
  @ApiProperty()
  readonly time: number;
  @ApiProperty({description:'可以为空'})
  readonly optional: string;
  @ApiProperty({description:'可以为空'})
  readonly select: string;
}
