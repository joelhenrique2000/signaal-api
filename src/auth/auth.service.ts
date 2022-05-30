import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { Usuario } from 'src/usuario/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    private readonly logger = new Logger('AuthService');

    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
    ) {}

    async login(usuario: Usuario, usuarioIp: string) {
        const loginResultado = await this.usuarioService.login(usuario);
        console.log(loginResultado);
        if (!loginResultado) {
            return null;
        }

        const payload = {
            sub: loginResultado.id,
            email: loginResultado.email,
        };

        return {
            token: this.jwtService.sign(payload),
        };
    }

    async validateUser(email: string, password: string) {
        let usuario: Usuario;
        try {
            usuario = await this.usuarioService.findOneByEmail(email);
        } catch (error) {
            return null;
        }

        const isPasswordValid = compareSync(password, usuario.senha);
        if (!isPasswordValid) return null;

        return usuario;
    }
}
