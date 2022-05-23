import { Module } from '@nestjs/common';
import { LicaoIconeService } from './licao-icone.service';
import { LicaoIconeController } from './licao-icone.controller';

@Module({
  controllers: [LicaoIconeController],
  providers: [LicaoIconeService]
})
export class LicaoIconeModule {}
