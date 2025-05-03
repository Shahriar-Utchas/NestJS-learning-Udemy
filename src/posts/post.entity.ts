import { Entity } from "typeorm";

@Entity()
export class Post{
    id: number;
    title: string;
    content: string;
    authorId: number;
}