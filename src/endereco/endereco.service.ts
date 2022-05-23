import { Injectable } from '@nestjs/common';
import { CreateEnderecoDto, UpdateEnderecoDto } from './endereco.dto';
import { EnderecoRepository } from './endereco.repository';

@Injectable()
export class EnderecoService {
    enderecoRepository: EnderecoRepository;

    constructor() {
        this.enderecoRepository = new EnderecoRepository();
    }

    create(createEnderecoDto: CreateEnderecoDto) {
        return this.enderecoRepository.create(createEnderecoDto);
    }

    findAll() {
        return this.enderecoRepository.findAll();
    }

    findOne(id: number) {
        return this.enderecoRepository.findOne(id);
    }

    update(id: number, updateEnderecoDto: UpdateEnderecoDto) {
        return this.enderecoRepository.update(id, updateEnderecoDto);
    }

    remove(id: number) {
        return this.enderecoRepository.remove(id);
    }
}
