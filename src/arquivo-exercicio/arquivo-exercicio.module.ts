import { Module } from '@nestjs/common';
import { ArquivoExercicioService } from './arquivo-exercicio.service';
import { ArquivoExercicioController } from './arquivo-exercicio.controller';

@Module({
    controllers: [ArquivoExercicioController],
    providers: [ArquivoExercicioService],
})
export class ArquivoExercicioModule {}
