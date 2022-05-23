import { PartialType } from '@nestjs/mapped-types';
import { CreateArquivoExercicioDto } from './create-arquivo-exercicio.dto';

export class UpdateArquivoExercicioDto extends PartialType(CreateArquivoExercicioDto) {}
