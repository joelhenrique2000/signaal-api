import { Module } from '@nestjs/common';
import { LicaoService } from './licao.service';
import { LicaoController } from './licao.controller';

@Module({
  controllers: [LicaoController],
  providers: [LicaoService]
})
export class LicaoModule {}
