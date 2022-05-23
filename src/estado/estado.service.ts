import { Injectable } from '@nestjs/common';
import { CreateEstadoDto, UpdateEstadoDto } from 'src/estado/estado.dto';
import { EstadoRepository } from 'src/estado/estado.repository';

@Injectable()
export class EstadoService {
    estadoRepository: EstadoRepository;

    constructor() {
        this.estadoRepository = new EstadoRepository();
    }

    create(createEstadoDto: CreateEstadoDto) {
        return this.estadoRepository.create(createEstadoDto);
    }

    findAll() {
        return this.estadoRepository.findAll();
    }

    findOne(id: number) {
        return this.estadoRepository.findOne(id);
    }

    update(id: number, updateEstadoDto: UpdateEstadoDto) {
        return this.estadoRepository.update(id, updateEstadoDto);
    }

    remove(id: number) {
        return this.estadoRepository.remove(id);
    }
}
