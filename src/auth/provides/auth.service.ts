import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { userService } from 'src/users/Providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(() => userService)) // Using forwardRef to avoid circular dependency
        private readonly usersService: userService,

    ) { }
    public login(email: string, password: string) {
        //check db
        const user = this.usersService.getUserById(1, '34');
        //login

        //return token
        return "sample token";

    }

    public isAuthenticated(token: string) {
        //check token
        if (token === "sample token") {
            return true;
        } else {
            return false;
        }
    }
}
