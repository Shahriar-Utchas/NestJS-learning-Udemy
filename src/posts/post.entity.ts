import { User } from "src/users/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 10,
        nullable: false,
    })
    name: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    title: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    content: string;
    
    @ManyToOne(() => User, user => user.posts)
    user: User;

}