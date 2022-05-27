import { Test, TestingModule } from '@nestjs/testing';
import { FotoPerfilController } from './foto-perfil.controller';
import { FotoPerfilService } from './foto-perfil.service';

describe('FotoPerfilController', () => {
    let controller: FotoPerfilController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FotoPerfilController],
            providers: [FotoPerfilService],
        }).compile();

        controller = module.get<FotoPerfilController>(FotoPerfilController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
