import { Injectable } from '@nestjs/common';
import { CreateCidadeDto, UpdateCidadeDto } from './cidade.dto';
import { CidadeRepository } from './cidade.repository';

@Injectable()
export class CidadeService {
    cidadeRepository: CidadeRepository;

    constructor() {
        this.cidadeRepository = new CidadeRepository();
    }

    create(createCidadeDto: CreateCidadeDto) {
        return this.cidadeRepository.create(createCidadeDto);
    }

    findAll() {
        return this.cidadeRepository.findAll();
    }

    findOne(id: number) {
        return this.cidadeRepository.findOne(id);
    }

    update(id: number, updateCidadeDto: UpdateCidadeDto) {
        return this.cidadeRepository.update(id, updateCidadeDto);
    }

    remove(id: number) {
        return this.cidadeRepository.remove(id);
    }
}
