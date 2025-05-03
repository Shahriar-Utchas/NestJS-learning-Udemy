import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './provides/posts.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [UsersModule], // Importing UsersModule to use userService in PostsService
})
export class PostsModule { }
