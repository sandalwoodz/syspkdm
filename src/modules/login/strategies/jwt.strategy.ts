import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { JwtPayload } from '../login.interface';
import { UserService } from 'src/modules/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'nestjszhy',
    });
  }

  async validate(payload: JwtPayload) {
    const { name } = payload;
    const entity = await this.userService.findByName(name);

    if (!entity) {
      throw new UnauthorizedException('没找到用户。');
    }

    return entity;
  }
}
