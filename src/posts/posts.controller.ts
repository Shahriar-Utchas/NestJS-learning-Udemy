import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostsService } from './provides/posts.service';
import { CreatePostDto } from './DTO/createPost.dto';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
    ) { }

    @Post('createPost')
    public createUser(@Body() createPostDTO: CreatePostDto) {
        return this.postsService.createPost(createPostDTO);
    }

}
