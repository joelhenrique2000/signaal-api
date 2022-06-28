import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import {
    Body,
    Controller,
    Get,
    Ip,
    Post,
    Request,
    UnauthorizedException,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsuarioDTO } from 'src/usuario/usuario.dto';
import { Usuario } from 'src/usuario/usuario.entity';
import { LoginDTO } from './auth.dto';
import { AuthService } from './auth.service';
import jwt from 'jsonwebtoken';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsuarioService } from 'src/usuario/usuario.service';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly usuarioService: UsuarioService,
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

    @Get('usuario')
    @UseGuards(JwtAuthGuard)
    async usuario(@Request() req) {
        const usuarioId = req.user.id;

        return this.usuarioService.findOne(usuarioId);
    }

    @Post('/validate_token')
    async validateToken(@Body() dto: { token: string }) {
        try {
            await jwt.verify(dto.token, process.env.JWT_SECRET_KEY);

            return true;
        } catch (error) {
            throw new UnauthorizedException('Token inválido');
        }
    }
}
