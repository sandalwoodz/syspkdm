import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../role/role.entity';

export class UserDto {
  @ApiProperty()
  readonly name: string;
  @ApiProperty()
  readonly password: string;
  @ApiProperty()
  readonly roles: Role[];
}

export class UpdatePasswordDto {
  @ApiProperty()
  readonly password: string;
  @ApiProperty()
  readonly newpasssword: string;
}
