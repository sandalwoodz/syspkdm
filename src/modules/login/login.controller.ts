import {
  Controller,
  Post,
  Body,
  Get,
  UsePipes,
  UseGuards,
  Req,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginDto } from './login.dto';
import { ok } from 'assert';
import { AuthGuard } from '@nestjs/passport';
import { users } from 'src/modules/users/users.entity';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { User } from 'src/core/decorators/users.decorators';
import { response } from 'express';

@Controller('login')
@ApiTags('登录')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  @ApiOperation({ summary: '登录' })
  @HttpCode(HttpStatus.CREATED)
  async login(@Body() data: LoginDto,) {
    return await this.loginService.login(data);

  }

  @Get('test')
  @ApiOperation({ summary: 'token策略' })
  @UseGuards(AuthGuard()) //
  async authTest(@User() user) {
    console.log('user:', user);
    return {
      message: 'ok',
    };
  }
}
