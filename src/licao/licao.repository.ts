import { Prisma, PrismaClient } from '@prisma/client';
import { CreateLicaoDto, UpdateLicaoDto } from './licao.dto';

export class LicaoRepository extends PrismaClient {
    async create(createLicaoDto: CreateLicaoDto) {
        const usuario = await this.licao.create({
            data: createLicaoDto,
        });

        return usuario;
    }

    async quantidadeExerciciosByLicaoId(licaoId: number) {
        return await this.exercicio.count({
            where: {
                licaoId,
            },
        });
    }

    async quantidadeExerciciosRespondidosByLicaoId(licaoId: number) {
        const quantidade = await this.$queryRaw(Prisma.sql`
            SELECT count(*) AS count
              FROM UsuariosOnExercicios uoe
        INNER JOIN Exercicio e
                ON e.id = uoe.exercicioId
        INNER JOIN Licao l
                ON l.id = e.licaoId
        INNER JOIN Assunto a
                ON a.id = l.assuntoId
             WHERE e.licaoId = ${+licaoId};
        `);

        return quantidade[0]['count'];
    }

    async porcentagemExerciciosRespondidosByLicaoId(
        licaoId: number,
    ): Promise<number> {
        const qtdTotalExercicios: number = await this.exercicio.count({
            where: {
                licaoId,
            },
        });

        const qtdExerciciosRespondidos: number = (
            await this.$queryRaw(Prisma.sql`
                SELECT count(*) AS count
                  FROM UsuariosOnExercicios uoe
            INNER JOIN Exercicio e
                    ON e.id = uoe.exercicioId
            INNER JOIN Licao l
                    ON l.id = e.licaoId
            INNER JOIN Assunto a
                    ON a.id = l.assuntoId
                WHERE e.licaoId = ${+licaoId};
            `)
        )[0]['count'];

        return (qtdExerciciosRespondidos * 100) / qtdTotalExercicios;
    }

    async exercicioDisponivelByLicaoId(licaoId: number) {
        const exercicio = (
            await this.$queryRaw(Prisma.sql`
            SELECT e.*
            FROM Exercicio AS e
           WHERE e.licaoId = ${+licaoId} AND id NOT IN (
                SELECT uoe.exercicioId
                  FROM UsuariosOnExercicios uoe 
                 WHERE uoe.exercicioId = e.id
           )
            LIMIT 1;
            `)
        )[0];

        return exercicio;
    }

    async findAll() {
        return await this.licao.findMany({
            orderBy: {
                titulo: 'asc',
            },
        });
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
