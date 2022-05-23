import { Injectable } from '@nestjs/common';
import { CreateAssuntoDto, UpdateAssuntoDto } from './assunto.dto';
import { AssuntoRepository } from './assunto.repository';

@Injectable()
export class AssuntoService {
    assuntoRepository: AssuntoRepository;

    constructor() {
        this.assuntoRepository = new AssuntoRepository();
    }

    create(createAssuntoDto: CreateAssuntoDto) {
        return this.assuntoRepository.create(createAssuntoDto);
    }

    findAll() {
        return this.assuntoRepository.findAll();
    }

    findOne(id: number) {
        return this.assuntoRepository.findOne(id);
    }

    update(id: number, updateAssuntoDto: UpdateAssuntoDto) {
        return this.assuntoRepository.update(id, updateAssuntoDto);
    }

    remove(id: number) {
        return this.assuntoRepository.remove(id);
    }
}
