import { PrismaClient } from '@prisma/client';
import { CreateUsuarioDto, UpdateUsuarioDto } from './usuario.dto';

export class UsuarioRepository extends PrismaClient {
    async create(createUsuarioDto: CreateUsuarioDto) {
        const usuario = await this.usuario.create({
            data: createUsuarioDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.usuario.findMany();
    }

    async findOne(id: number) {
        return await this.usuario.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
        const usuarioAtualizado = await this.usuario.update({
            where: { id },
            data: updateUsuarioDto,
        });

        return usuarioAtualizado;
    }

    async remove(id: number) {
        const usuarioDeletado = await this.usuario.delete({
            where: { id },
        });

        return usuarioDeletado.id;
    }
}
