import { Injectable } from '@nestjs/common';
import { RespostaRepository } from 'src/resposta/licao.repository';
import { CreateLicaoDto, UpdateLicaoDto } from './licao.dto';
import { LicaoRepository } from './licao.repository';

@Injectable()
export class LicaoService {
    exercicioRepository: LicaoRepository;
    respostaRepository: RespostaRepository;

    constructor() {
        this.exercicioRepository = new LicaoRepository();
        this.respostaRepository = new RespostaRepository();
    }

    create(createLicaoDto: CreateLicaoDto) {
        return this.exercicioRepository.create(createLicaoDto);
    }

    findAll() {
        return this.exercicioRepository.findAll();
    }

    findOne(id: number) {
        return this.exercicioRepository.findOne(id);
    }

    update(id: number, updateLicaoDto: UpdateLicaoDto) {
        return this.exercicioRepository.update(id, updateLicaoDto);
    }

    remove(id: number) {
        return this.exercicioRepository.remove(id);
    }

    async quantidadeExerciciosByLicaoId(licaoId: number) {
        return this.exercicioRepository.quantidadeExerciciosByLicaoId(licaoId);
    }

    async quantidadeExerciciosRespondidosByLicaoId(licaoId: number) {
        return this.exercicioRepository.quantidadeExerciciosRespondidosByLicaoId(
            licaoId,
        );
    }

    async porcentagemExerciciosRespondidosByLicaoId(licaoId: number) {
        return this.exercicioRepository.porcentagemExerciciosRespondidosByLicaoId(
            licaoId,
        );
    }

    async exercicioDisponivelByLicaoId(licaoId: number) {
        const exercicioDisponivel =
            await this.exercicioRepository.exercicioDisponivelByLicaoId(
                licaoId,
            );

        const respostas = await this.respostaRepository.findAll();

        return {
            ...exercicioDisponivel,
            respostas: respostas.filter(
                (item) => item.exercicioId === exercicioDisponivel.id,
            ),
        };
    }
}
