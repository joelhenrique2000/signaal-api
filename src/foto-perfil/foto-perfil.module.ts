import { Module } from '@nestjs/common';
import { FotoPerfilService } from './foto-perfil.service';
import { FotoPerfilController } from './foto-perfil.controller';

@Module({
    controllers: [FotoPerfilController],
    providers: [FotoPerfilService],
})
export class FotoPerfilModule {}
