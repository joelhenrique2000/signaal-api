import { Injectable } from '@nestjs/common';
import { RespostaRepository } from './licao.repository';
import { CreateRespostaDto, UpdateRespostaDto } from './resposta.dto';

@Injectable()
export class RespostaService {
    respostaRepository: RespostaRepository;

    constructor() {
        this.respostaRepository = new RespostaRepository();
    }

    create(createRespostaDto: CreateRespostaDto) {
        return this.respostaRepository.create(createRespostaDto);
    }

    findAll() {
        return this.respostaRepository.findAll();
    }

    findOne(id: number) {
        return this.respostaRepository.findOne(id);
    }

    update(id: number, updateRespostaDto: UpdateRespostaDto) {
        return this.respostaRepository.update(id, updateRespostaDto);
    }

    remove(id: number) {
        return this.respostaRepository.remove(id);
    }
}
