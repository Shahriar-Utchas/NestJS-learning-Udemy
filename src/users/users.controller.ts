import { Body, Controller, Get, Param, Post, Query, Headers, Ip, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './DTOs/CreateUser.dto';
import { userService } from './Providers/users.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly userService: userService
    ) { }

    @Get()
    public getUsers() {
        return this.userService.getUsers();
    }

    // params
    // @Get('/:id/:optional?')
    // public getUserById(@Param() params: any) {
    //     return `This action returns user with id ${params.id}, optional ${params.optional}`;
    // }
    @Get('/:id')
    public getUserById(@Param('id', ParseIntPipe) id: number, @Query('limit') limit: string) {
        return this.userService.getUserById(id, limit);
    }

    // @Post('createUser')
    // public createUser(@Body() body: any, @Headers() headers: any, @Ip() ip: string) {
    //     console.log(headers);
    //     console.log(ip);
    //     // console.log(body);
    //     return `This action creates a user with name ${body.name} and age ${body.age}`;
    // }

    @Post('createUser')
    public createUser(@Body() createUserDTO: CreateUserDto) {
        return this.userService.createUser(createUserDTO);
    }

}
