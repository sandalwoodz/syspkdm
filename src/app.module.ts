import { Module, } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoginModule } from './modules/login/login.module';
import { TeachersModule } from './modules/teachers/teachers.module';
import { ClassroomModule } from './modules/classroom/classroom.module';
import { RcourseModule } from './modules/rcourse/rcourse.module';
import { PcourseModule } from './modules/pcourse/pcourse.module';
import { RoleModule } from './modules/role/role.module';
import { LoggerModule } from './modules/logger/logger.module';
import { FileuploadModule } from './modules/fileupload/fileupload.module';
import { AvatarModule } from './modules/avatar/avatar.module';
import { CourseModule } from './modules/course/course.module';
import { ClassModule } from './modules/class/class.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      //name: 'cdb2020',
      type: 'mysql',
      host: '49.233.211.182',
      port: 3306,
      username: 'syspk2020',
      password: '2020pk',
      database: 'syspk2020',
      synchronize: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UsersModule,
    LoginModule,
    TeachersModule,
    ClassroomModule,
    RcourseModule,
    PcourseModule,
    RoleModule,
    LoggerModule,
    FileuploadModule,
    AvatarModule,
    CourseModule,
    ClassModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// export class AppModule implements NestModule{
//   configure(consumer:MiddlewareConsumer){
//     consumer
//     .apply(DemoMiddleware)//中间件
//     .forRoutes(''); //接口
//   }
// }
