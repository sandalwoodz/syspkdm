import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class teachersDto {
  @ApiProperty()
  @IsString()
  readonly jobnumber: string;
  @ApiProperty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsString()
  readonly college: string;
}
