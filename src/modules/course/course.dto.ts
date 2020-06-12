import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class courseDto {
  @ApiProperty({description:'课程名'})
   coursename: string;
  @ApiProperty({description:'学时'})
   times: number;


}
