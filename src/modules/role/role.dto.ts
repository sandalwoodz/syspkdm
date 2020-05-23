import { UserRole } from 'src/core/enums/user-role.enum';
import { ApiProperty } from '@nestjs/swagger';

export class RoleDto {
  @ApiProperty()
  readonly name: UserRole;
  @ApiProperty()
  readonly alias: string;
}
