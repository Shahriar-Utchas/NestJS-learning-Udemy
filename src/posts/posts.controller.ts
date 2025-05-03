import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './provides/posts.service';

@Controller('posts')
export class PostsController {
    constructor(
        private readonly postsService: PostsService,
    ) { }

    @Get('/:id')
    public getPostById(@Param('id') id: number) {
        return this.postsService.getPostsByID(id);
    }
}
