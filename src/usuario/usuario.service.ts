import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto, UpdateUsuarioDto } from './usuario.dto';
import { UsuarioRepository } from './usuario.repository';

@Injectable()
export class UsuarioService {
    usuarioRepository: UsuarioRepository;

    constructor() {
        this.usuarioRepository = new UsuarioRepository();
    }

    create(createUsuarioDto: CreateUsuarioDto) {
        createUsuarioDto.dataNascimento = new Date(
            createUsuarioDto.dataNascimento,
        );

        return this.usuarioRepository.create(createUsuarioDto);
    }

    findAll() {
        return this.usuarioRepository.findAll();
    }

    findOne(id: number) {
        return this.usuarioRepository.findOne(id);
    }

    update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        return this.usuarioRepository.update(id, updateUsuarioDto);
    }

    remove(id: number) {
        return this.usuarioRepository.remove(id);
    }
}
