import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Injectable } from '@nestjs/common';
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

    findOneByEmail(email: string) {
        const usuario = this.usuarioRepository.findOneByEmail(email);

        if (usuario === null) throw new Error('Email não localizado');

        return usuario;
    }

    update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        return this.usuarioRepository.update(id, updateUsuarioDto);
    }

    remove(id: number) {
        return this.usuarioRepository.remove(id);
    }
}
