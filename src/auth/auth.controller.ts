import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('generate-token')
  async generateToken(@Body() user: any) {
    
    const payload = { sub: 'user123' }; 
    const token = await this.authService.generateToken(payload);

    return { access_token: token };
  }
}
