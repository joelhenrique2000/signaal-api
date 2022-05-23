import { Injectable } from '@nestjs/common';
import { CreateArquivoExercicioDto } from './dto/create-arquivo-exercicio.dto';
import { UpdateArquivoExercicioDto } from './dto/update-arquivo-exercicio.dto';

@Injectable()
export class ArquivoExercicioService {
  create(createArquivoExercicioDto: CreateArquivoExercicioDto) {
    return 'This action adds a new arquivoExercicio';
  }

  findAll() {
    return `This action returns all arquivoExercicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arquivoExercicio`;
  }

  update(id: number, updateArquivoExercicioDto: UpdateArquivoExercicioDto) {
    return `This action updates a #${id} arquivoExercicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} arquivoExercicio`;
  }
}
