import { Module } from '@nestjs/common';
import { AssuntoService } from './assunto.service';
import { AssuntoController } from './assunto.controller';
import { LicaoService } from 'src/licao/licao.service';

@Module({
    controllers: [AssuntoController],
    providers: [AssuntoService, LicaoService],
})
export class AssuntoModule {}
