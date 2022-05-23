import { Injectable } from '@nestjs/common';
import { CreatePaisDto, UpdatePaisDto } from './pais.dto';
import { PaisRepository } from './pais.repository';

@Injectable()
export class PaisService {
    paisRepository: PaisRepository;

    constructor() {
        this.paisRepository = new PaisRepository();
    }

    create(createPaisDto: CreatePaisDto) {
        return this.paisRepository.create(createPaisDto);
    }

    findAll() {
        return this.paisRepository.findAll();
    }

    findOne(id: number) {
        return this.paisRepository.findOne(id);
    }

    update(id: number, updatePaisDto: UpdatePaisDto) {
        return this.paisRepository.update(id, updatePaisDto);
    }

    remove(id: number) {
        return this.paisRepository.remove(id);
    }
}
