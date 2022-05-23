import { PrismaClient } from '@prisma/client';
import { CreatePaisDto, UpdatePaisDto } from './pais.dto';

export class PaisRepository extends PrismaClient {
    async create(createPaisDto: CreatePaisDto) {
        const usuario = await this.pais.create({
            data: createPaisDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.pais.findMany();
    }

    async findOne(id: number) {
        return await this.pais.findUnique({
            where: { id },
        });
    }

    async update(id: number, updatePaisDto: UpdatePaisDto) {
        const paisAtualizado = await this.pais.update({
            where: { id },
            data: updatePaisDto,
        });

        return paisAtualizado;
    }

    async remove(id: number) {
        const paisDeletado = await this.pais.delete({
            where: { id },
        });

        return paisDeletado.id;
    }
}
