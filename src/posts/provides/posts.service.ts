import { Injectable } from '@nestjs/common';
import { userService } from 'src/users/Providers/users.service';

@Injectable()
export class PostsService {
    constructor(
        private readonly userService: userService, // Injecting userService to use its methods
    ) { }


    public getPostsByID(id:number) {
        const user = this.userService.getUserById(id, '3');
        return [
            {
                user: user,
                id: id,
                title: 'Post 1',
                content: 'This is the content of post 1',
            },
            {
                user: user,
                id: id + 1,
                title: 'Post 2',
                content: 'This is the content of post 2',
            },
        ];
    }
}
