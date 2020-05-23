import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PermissionInterface } from '../interfaces/permission.interface';
import { users } from 'src/modules/users/users.entity';

@Injectable()
export class AccessGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  async validatePermissions(permissions: PermissionInterface[], user: users) {
    const results = permissions.map(async permission => {
      const { role } = permission;
      let hasRole: boolean = true;

      if (role) {
        hasRole = user.roles.some(UserRole => UserRole.name === role);
      }

      return hasRole;
    });

    return Promise.all(results);
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const permissions = this.reflector.get('permissions', context.getHandler());

    const results = await this.validatePermissions(permissions, request.user);

    return results.includes(true);
  }
}
