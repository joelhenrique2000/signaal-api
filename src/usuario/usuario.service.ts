import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
import { compare, genSalt, hash } from 'bcryptjs';
import { mapper } from 'src/mappings/mapper';
import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioDTO } from './usuario.dto';
import { Usuario } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Injectable()
export class UsuarioService {
    constructor(
        private readonly usuarioRepository: UsuarioRepository,
        @InjectMapper() private readonly mapper: Mapper,
    ) {
        this.usuarioRepository = new UsuarioRepository();
    }

    create(usuario: Usuario) {
        usuario.dataNascimento = new Date(usuario.dataNascimento);

        return this.usuarioRepository.create(usuario);
    }

    findAll() {
        return this.usuarioRepository.findAll();
    }

    findOne(id: number) {
        return this.usuarioRepository.findOne(id);
    }

    async findOneByEmail(email: string) {
        const usuario = await this.usuarioRepository.findOneByEmail(email);

        return usuario;
    }

    async login(loginDTO: { email: string; senha: string }) {
        const { email, senha } = loginDTO;

        const usuario = await this.findOneByEmail(email);

        if (!usuario) {
            return Promise.resolve(null);
        }

        const isSenhaIgual = await compare(senha, usuario.senha);

        if (!isSenhaIgual) {
            throw new Error('Email ou senha está incorreta!');
        }

        return usuario;
    }

    protected async hashPassword(senha: string) {
        const salt = await genSalt(10);
        const senhaHash = await hash(senha, salt);

        return senhaHash;
    }

    update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        return this.usuarioRepository.update(id, updateUsuarioDto);
    }

    remove(id: number) {
        return this.usuarioRepository.remove(id);
    }
}
