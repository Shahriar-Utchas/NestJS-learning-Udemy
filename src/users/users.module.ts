import { forwardRef, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { userService } from './Providers/users.service';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  controllers: [UsersController],
  providers: [userService],
  exports: [userService],
  imports: [forwardRef(() => AuthModule), TypeOrmModule.forFeature([User])], 
})
export class UsersModule { }
