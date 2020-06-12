/* eslint-disable no-var */
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TimeGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const re = context.switchToHttp().getRequest();

    var a = true;
    var b = [16,17,26,27,31,32,33,34,35,36,37,46,47,56,57,,66,67,76,77];
    for(var j = 0;j< re.body.time.length; j++){
    for (var i = 0; i < b.length; i++) {
      if (re.body.time[j] === b[i]) {
        return (a = false);
      }
    }}
    return a;
  }
}
