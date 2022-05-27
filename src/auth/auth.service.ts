import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcrypt';
import { Usuario } from 'src/usuario/usuario.entity';
import { UsuarioService } from 'src/usuario/usuario.service';

@Injectable()
export class AuthService {
    constructor(
        private usuarioService: UsuarioService,
        private jwtService: JwtService,
    ) {}

    async login(user) {
        const loginResultado = await this.usuarioService.login({
            email: user.email,
            senha: user.senha,
        });

        if (!loginResultado) {
            throw new UnauthorizedException();
        }

        const payload = { sub: user.id, email: user.email };

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
