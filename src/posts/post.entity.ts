import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}