import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class teachersDto {
  @ApiProperty({description:'教师工号'})
  @IsString()
  readonly jobnumber: string;
  @ApiProperty({description:'教师名字'})
  @IsString()
  readonly name: string;
  @ApiProperty({description:'课程所属院校'})
  @IsString()
  readonly college: string;
}
