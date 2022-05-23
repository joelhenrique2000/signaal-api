import { PrismaClient } from '@prisma/client';
import { CreateCidadeDto, UpdateCidadeDto } from './cidade.dto';

export class CidadeRepository extends PrismaClient {
    async create(createCidadeDto: CreateCidadeDto) {
        const usuario = await this.cidade.create({
            data: createCidadeDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.cidade.findMany();
    }

    async findOne(id: number) {
        return await this.cidade.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateCidadeDto: UpdateCidadeDto) {
        const cidadeAtualizado = await this.cidade.update({
            where: { id },
            data: updateCidadeDto,
        });

        return cidadeAtualizado;
    }

    async remove(id: number) {
        const cidadeDeletado = await this.cidade.delete({
            where: { id },
        });

        return cidadeDeletado.id;
    }
}
