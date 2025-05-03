import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { CreateUserDto } from "../DTOs/CreateUser.dto";
import { AuthService } from "src/auth/provides/auth.service";
import { Repository } from "typeorm";
import { User } from "../user.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class userService {
    constructor(
        //Injecting AuthService to use its methods
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,

        //Injecting UserRepository to use its methods
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }
    public getUsers() {
        const isAuth = this.authService.isAuthenticated("sample token");
        console.log(isAuth);
        return 'This action returns all users';
    }

    public async createUser(createUserDTO: CreateUserDto) {
        const existingUser = await this.userRepository.findOne({
            where: { email: createUserDTO.email },
        });
        if (existingUser) {
            throw new Error("User already exists");
        }
        let newUser = this.userRepository.create(createUserDTO);
        newUser = await this.userRepository.save(newUser);
        return newUser;
    }


    public getUserById(id: number, limit: string) {
        return `This action returns user with id ${id} and limit ${limit}`;
    }
}