import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class rcourseDto {
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
  readonly teachersId: number;

}
