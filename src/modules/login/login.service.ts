import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/users/users.service';
import { LoginDto } from './login.dto';
import { JwtPayload } from './login.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(data: LoginDto) {
    const { name, password } = data;
    const entity = await this.userService.findByName(name);

    if (!entity) {
      throw new UnauthorizedException('用户不存在！');
    }

    if (!(await entity.comparePassword(password))) {
      throw new UnauthorizedException('密码不匹配');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const avatar = entity.avatar;
    const roles = entity.roles;
    const { id } = entity;
    const payload = { id, name };
    const token = this.signToken(payload);

    return {
      ...payload,
      token,
      roles,
      avatar
    };
  }

  signToken(data: JwtPayload) {
    return this.jwtService.sign(data);
  }
}
