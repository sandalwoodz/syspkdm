import { ApiProperty } from '@nestjs/swagger';

// eslint-disable-next-line @typescript-eslint/class-name-casing
export class classroomDto {
  @ApiProperty({description:'实验室名称'})
  readonly name: string;
  @ApiProperty({description:'南岸/双福'})
  readonly place: string;
  @ApiProperty({description:'容量'})
  readonly capacity: number;
}
