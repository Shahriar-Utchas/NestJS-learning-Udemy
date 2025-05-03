import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateUserDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 10,
        nullable: false,
    })
    @IsNotEmpty()
    name: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    @IsNotEmpty()
    title: string;

    @Column({
        type: 'varchar',
        nullable: false,
    })
    @IsNotEmpty()
    content: string;

}