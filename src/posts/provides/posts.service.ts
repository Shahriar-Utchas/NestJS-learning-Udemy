import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { userService } from 'src/users/Providers/users.service';
import { Post } from '../post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from '../DTO/createPost.dto';

@Injectable()
export class PostsService {
    constructor(
        private readonly userService: userService, // Injecting userService to use its methods
        @InjectRepository(Post)
        private postRepository: Repository<Post>,
    ) { }

    public async createPost(createPostDTO: CreatePostDto) {
        const newPost = this.postRepository.create({
            name: createPostDTO.name,
            title: createPostDTO.title,
            content: createPostDTO.content,
            user: { id: createPostDTO.userId },
        });

        return await this.postRepository.save(newPost);
    }


}
