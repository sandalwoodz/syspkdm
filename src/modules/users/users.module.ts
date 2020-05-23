import { Module } from '@nestjs/common';
import { UserController } from './users.controller';
import { UserService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { users } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([users])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
