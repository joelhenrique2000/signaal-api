import { Test, TestingModule } from '@nestjs/testing';
import { LicaoIconeController } from './licao-icone.controller';
import { LicaoIconeService } from './licao-icone.service';

describe('LicaoIconeController', () => {
    let controller: LicaoIconeController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LicaoIconeController],
            providers: [LicaoIconeService],
        }).compile();

        controller = module.get<LicaoIconeController>(LicaoIconeController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
