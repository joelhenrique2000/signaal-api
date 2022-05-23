import { Injectable } from '@nestjs/common';
import { CreateExercicioDto, UpdateExercicioDto } from './exercicio.dto';
import { ExercicioRepository } from './exercicios.repository';

@Injectable()
export class ExerciciosService {
    exercicioRepository: ExercicioRepository;

    constructor() {
        this.exercicioRepository = new ExercicioRepository();
    }

    create(createExercicioDto: CreateExercicioDto) {
        return this.exercicioRepository.create(createExercicioDto);
    }

    findAll() {
        return this.exercicioRepository.findAll();
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
}
