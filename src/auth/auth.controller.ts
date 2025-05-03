import { Controller } from '@nestjs/common';
import { AuthService } from './provides/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService, // Injecting AuthService to use its methods
    ) { }
}
