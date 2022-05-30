import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import {
    Body,
    Controller,
    Ip,
    Post,
    UnauthorizedException,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioDTO } from 'src/usuario/usuario.dto';
import { Usuario } from 'src/usuario/usuario.entity';
import { LoginDTO } from './auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        @InjectMapper() private readonly mapper: Mapper,
    ) {}

    @Post('login')
    async login(@Ip() usuarioIp, @Body() dto: LoginDTO) {
        const usuario = this.mapper.map(dto, UsuarioDTO, Usuario);
        const loginResultado = await this.authService.login(usuario, usuarioIp);
        console.log(loginResultado);

        if (!loginResultado) {
            throw new UnauthorizedException(
                'O e-mail ou a senha estão incorretos',
            );
        }

        return loginResultado;
    }
}
