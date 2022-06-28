import { Injectable } from '@nestjs/common';
import { RespostaRepository } from 'src/resposta/licao.repository';
import {
    CreateExercicioDto,
    UpdateExercicioDto,
} from './../exercicios/exercicio.dto';
import { ExercicioRepository } from './../exercicios/exercicios.repository';
import { ResponderExercicioRepository } from './responder-exercicio..repository';

@Injectable()
export class ResponderExercicioService {
    exercicioRepository: ResponderExercicioRepository;
    respostaRepository: RespostaRepository;

    constructor() {
        this.exercicioRepository = new ResponderExercicioRepository();
        this.respostaRepository = new RespostaRepository();
    }

    create(createExercicioDto: CreateExercicioDto) {
        return this.exercicioRepository.create(createExercicioDto);
    }

    findAll(usuarioId: number, query: any) {
        return this.exercicioRepository.findAll(usuarioId, query);
    }

    findOne(id: number) {
        return this.exercicioRepository.findOne(id);
    }

    update(id: number, updateExercicioDto: UpdateExercicioDto) {
        return this.exercicioRepository.update(id, updateExercicioDto);
    }

    remove(id: number) {
        return this.exercicioRepository.remove(id);
    }

    async responder(respostaId: number, usuarioId: number) {
        const respostaUsuario = await this.respostaRepository.findOne(
            respostaId,
        );
        const respostas = await this.respostaRepository.findAll();

        const respostaRespodida = respostas
            .filter((item) => item.exercicioId === respostaUsuario.exercicioId)
            .find((item) => item.id === respostaId);

        return this.exercicioRepository.responder(
            respostaRespodida.isRespostaCerta,
            respostaUsuario.exercicioId,
            usuarioId,
        );
    }

    verReposta(exercicioId: number) {
        return this.exercicioRepository.obterResposta(exercicioId, 1);
    }
}
