import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UsersModule } from 'src/modules/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secretOrPrivateKey: 'nestjszhy',
      signOptions: {
        expiresIn: '12h',
      },
    }),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy],
})
export class LoginModule {}
