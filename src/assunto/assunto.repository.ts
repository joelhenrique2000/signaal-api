import { PrismaClient } from '@prisma/client';
import { CreateAssuntoDto, UpdateAssuntoDto } from './assunto.dto';

export class AssuntoRepository extends PrismaClient {
    async create(createAssuntoDto: CreateAssuntoDto) {
        const usuario = await this.assunto.create({
            data: createAssuntoDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.assunto.findMany();
    }

    async findOne(id: number) {
        return await this.assunto.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateAssuntoDto: UpdateAssuntoDto) {
        const assuntoAtualizado = await this.assunto.update({
            where: { id },
            data: updateAssuntoDto,
        });

        return assuntoAtualizado;
    }

    async remove(id: number) {
        const assuntoDeletado = await this.assunto.delete({
            where: { id },
        });

        return assuntoDeletado.id;
    }
}
