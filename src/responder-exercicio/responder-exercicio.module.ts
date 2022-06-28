import { Module } from '@nestjs/common';
import { ResponderExercicioController } from './responder-exercicio.controller';
import { ResponderExercicioService } from './responder-exercicio.service';

@Module({
    controllers: [ResponderExercicioController],
    providers: [ResponderExercicioService],
})
export class ResponderExercicioModule {}
