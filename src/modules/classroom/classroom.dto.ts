import { ApiProperty } from '@nestjs/swagger';

export class classroomDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly place: string;
  @ApiProperty()
  readonly capacity: number;
}
