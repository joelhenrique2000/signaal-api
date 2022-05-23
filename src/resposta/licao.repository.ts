import { PrismaClient } from '@prisma/client';
import { CreateRespostaDto, UpdateRespostaDto } from './resposta.dto';

export class RespostaRepository extends PrismaClient {
    async create(createRespostaDto: CreateRespostaDto) {
        const usuario = await this.resposta.create({
            data: createRespostaDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.resposta.findMany();
    }

    async findOne(id: number) {
        return await this.resposta.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateRespostaDto: UpdateRespostaDto) {
        const respostaAtualizado = await this.resposta.update({
            where: { id },
            data: updateRespostaDto,
        });

        return respostaAtualizado;
    }

    async remove(id: number) {
        const respostaDeletado = await this.resposta.delete({
            where: { id },
        });

        return respostaDeletado.id;
    }
}
