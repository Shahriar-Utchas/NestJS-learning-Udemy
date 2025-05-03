import { IsNotEmpty } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    content: string;

}