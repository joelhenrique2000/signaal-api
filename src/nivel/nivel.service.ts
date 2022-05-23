import { Injectable } from '@nestjs/common';
import { CreateNivelDto, UpdateNivelDto } from './nivel.dto';
import { NivelRepository } from './nivel.repository';

@Injectable()
export class NivelService {
    nivelRepository: NivelRepository;

    constructor() {
        this.nivelRepository = new NivelRepository();
    }

    create(createNivelDto: CreateNivelDto) {
        return this.nivelRepository.create(createNivelDto);
    }

    findAll() {
        return this.nivelRepository.findAll();
    }

    findOne(id: number) {
        return this.nivelRepository.findOne(id);
    }

    update(id: number, updateNivelDto: UpdateNivelDto) {
        return this.nivelRepository.update(id, updateNivelDto);
    }

    remove(id: number) {
        return this.nivelRepository.remove(id);
    }
}
