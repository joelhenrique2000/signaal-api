import { Test, TestingModule } from '@nestjs/testing';
import { FotoPerfilService } from './foto-perfil.service';

describe('FotoPerfilService', () => {
    let service: FotoPerfilService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FotoPerfilService],
        }).compile();

        service = module.get<FotoPerfilService>(FotoPerfilService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
