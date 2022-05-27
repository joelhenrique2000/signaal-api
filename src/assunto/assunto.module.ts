import { Module } from '@nestjs/common';
import { AssuntoService } from './assunto.service';
import { AssuntoController } from './assunto.controller';

@Module({
    controllers: [AssuntoController],
    providers: [AssuntoService],
})
export class AssuntoModule {}
