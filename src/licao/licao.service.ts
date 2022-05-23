import { Injectable } from '@nestjs/common';
import { CreateLicaoDto, UpdateLicaoDto } from './licao.dto';
import { LicaoRepository } from './licao.repository';

@Injectable()
export class LicaoService {
    exercicioRepository: LicaoRepository;

    constructor() {
        this.exercicioRepository = new LicaoRepository();
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
}
