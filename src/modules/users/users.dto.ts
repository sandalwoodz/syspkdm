import { ApiProperty } from '@nestjs/swagger';
import { Role } from '../role/role.entity';

export class UserDto {
  @ApiProperty({description:'用户名'})
  readonly name: string;
  @ApiProperty({description:'密码'})
  readonly password: string;
  @ApiProperty({description:'关联角色'})
  readonly roles: Role[];
}

export class UpdatePasswordDto {
  @ApiProperty({description:'用户名'})
  readonly password: string;
  @ApiProperty({description:'密码'})
  readonly newpasssword: string;
}
