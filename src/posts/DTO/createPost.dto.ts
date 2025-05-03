import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePostDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;
    
    @IsNumber()
    @IsNotEmpty()
    userId: number;

}