import { PrismaClient } from '@prisma/client';
import { CreateEnderecoDto, UpdateEnderecoDto } from './endereco.dto';

export class EnderecoRepository extends PrismaClient {
    async create(createEnderecoDto: CreateEnderecoDto) {
        const usuario = await this.endereco.create({
            data: createEnderecoDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.endereco.findMany();
    }

    async findOne(id: number) {
        return await this.endereco.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
        const enderecoAtualizado = await this.endereco.update({
            where: { id },
            data: updateEnderecoDto,
        });

        return enderecoAtualizado;
    }

    async remove(id: number) {
        const enderecoDeletado = await this.endereco.delete({
            where: { id },
        });

        return enderecoDeletado.id;
    }
}
