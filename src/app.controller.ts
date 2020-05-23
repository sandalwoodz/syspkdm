import { Controller, Get, Request, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root() {
    return;
  }

  //   @Get('cookie')
  // 	getCookie(@Request() req){
  //     //不加密获取
  //     req.cookie('value','zhy',{maxAge:1000*60*10,httpOnly:true})
  // 		return req.cookies.value;

  // 	}
}
