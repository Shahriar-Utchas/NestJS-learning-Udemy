import { Post } from "src/posts/post.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 10,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'int',
        nullable: false,
    })
    age: number;

    @Column({
        type: 'varchar',
        unique: true,
        nullable: false,
    })
    email: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    password: string;

    @OneToMany(() => Post, post => post.user)
    posts: Post[];
}