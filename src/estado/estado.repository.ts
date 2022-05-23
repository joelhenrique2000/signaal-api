import { PrismaClient } from '@prisma/client';
import { CreateEstadoDto, UpdateEstadoDto } from './estado.dto';

export class EstadoRepository extends PrismaClient {
    async create(createEstadoDto: CreateEstadoDto) {
        const estado = await this.estado.create({
            data: createEstadoDto,
        });

        return estado;
    }

    async findAll() {
        return await this.estado.findMany();
    }

    async findOne(id: number) {
        return await this.estado.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateEstadoDto: UpdateEstadoDto) {
        const estadoAtualizado = await this.estado.update({
            where: { id },
            data: updateEstadoDto,
        });

        return estadoAtualizado;
    }

    async remove(id: number) {
        const estadoDeletado = await this.estado.delete({
            where: { id },
        });

        return estadoDeletado.id;
    }
}
