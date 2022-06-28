import { Prisma, PrismaClient } from '@prisma/client';
import {
    CreateExercicioDto,
    UpdateExercicioDto,
} from './../exercicios/exercicio.dto';

export class ResponderExercicioRepository extends PrismaClient {
    async create(createExercicioDto: CreateExercicioDto) {
        const usuario = await this.exercicio.create({
            data: createExercicioDto,
        });

        return usuario;
    }

    async findAll(usuarioId: number, query: any) {
        // eslint-disable-next-line prefer-const
        let where = { usuarioId };

        if (query.exercicioId) {
            where['exercicioId'] = +query.exercicioId;
        }

        if (query.assuntoId) {
            return await this.$queryRaw(Prisma.sql`
                SELECT uoe.*
                  FROM UsuariosOnExercicios uoe
            INNER JOIN Exercicio e
                    ON e.id = uoe.exercicioId
            INNER JOIN Licao l
                    ON l.id = e.licaoId
            INNER JOIN Assunto a
                    ON a.id = l.assuntoId
                 WHERE l.assuntoId = ${+query.assuntoId};
            `);
        }

        if (query.licaoId) {
            return await this.$queryRaw(Prisma.sql`
                SELECT uoe.*
                  FROM UsuariosOnExercicios uoe
            INNER JOIN Exercicio e
                    ON e.id = uoe.exercicioId
            INNER JOIN Licao l
                    ON l.id = e.licaoId
            INNER JOIN Assunto a
                    ON a.id = l.assuntoId
                 WHERE e.licaoId = ${+query.licaoId};
            `);
        }

        return await this.usuariosOnExercicios.findMany({
            where,
        });
    }

    async findOne(id: number) {
        return await this.exercicio.findUnique({
            where: { id },
        });
    }

    async responder(isAcertou, exercicioId, usuarioId) {
        return await this.usuariosOnExercicios.create({
            data: {
                isAcertou,
                exercicioId,
                usuarioId,
            },
        });
    }

    async obterResposta(exercicioId, usuarioId) {
        return await this.usuariosOnExercicios.findUnique({
            where: {
                exercicioId_usuarioId: {
                    exercicioId,
                    usuarioId,
                },
            },
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
