import { PrismaClient } from '@prisma/client';
import { CreateNivelDto, UpdateNivelDto } from './nivel.dto';

export class NivelRepository extends PrismaClient {
    async create(createNivelDto: CreateNivelDto) {
        const usuario = await this.nivel.create({
            data: createNivelDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.nivel.findMany();
    }

    async findOne(id: number) {
        return await this.nivel.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateNivelDto: UpdateNivelDto) {
        const nivelAtualizado = await this.nivel.update({
            where: { id },
            data: updateNivelDto,
        });

        return nivelAtualizado;
    }

    async remove(id: number) {
        const nivelDeletado = await this.nivel.delete({
            where: { id },
        });

        return nivelDeletado.id;
    }
}
