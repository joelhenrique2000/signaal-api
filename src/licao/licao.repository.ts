import { PrismaClient } from '@prisma/client';
import { CreateLicaoDto, UpdateLicaoDto } from './licao.dto';

export class LicaoRepository extends PrismaClient {
    async create(createLicaoDto: CreateLicaoDto) {
        const usuario = await this.licao.create({
            data: createLicaoDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.licao.findMany();
    }

    async findOne(id: number) {
        return await this.licao.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateLicaoDto: UpdateLicaoDto) {
        const licaoAtualizado = await this.licao.update({
            where: { id },
            data: updateLicaoDto,
        });

        return licaoAtualizado;
    }

    async remove(id: number) {
        const licaoDeletado = await this.licao.delete({
            where: { id },
        });

        return licaoDeletado.id;
    }
}
