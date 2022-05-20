import { Test, TestingModule } from '@nestjs/testing';
import { LicaoController } from './licao.controller';
import { LicaoService } from './licao.service';

describe('LicaoController', () => {
  let controller: LicaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LicaoController],
      providers: [LicaoService],
    }).compile();

    controller = module.get<LicaoController>(LicaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
