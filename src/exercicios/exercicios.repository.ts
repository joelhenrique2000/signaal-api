import { PrismaClient } from '@prisma/client';
import { CreateExercicioDto, UpdateExercicioDto } from './exercicio.dto';

export class ExercicioRepository extends PrismaClient {
    async create(createExercicioDto: CreateExercicioDto) {
        const usuario = await this.exercicio.create({
            data: createExercicioDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.exercicio.findMany();
    }

    async findOne(id: number) {
        return await this.exercicio.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateExercicioDto: UpdateExercicioDto) {
        const exercicioAtualizado = await this.exercicio.update({
            where: { id },
            data: updateExercicioDto,
        });

        return exercicioAtualizado;
    }

    async remove(id: number) {
        const exercicioDeletado = await this.exercicio.delete({
            where: { id },
        });

        return exercicioDeletado.id;
    }
}
