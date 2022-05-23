import { Test, TestingModule } from '@nestjs/testing';
import { LicaoIconeService } from './licao-icone.service';

describe('LicaoIconeService', () => {
  let service: LicaoIconeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LicaoIconeService],
    }).compile();

    service = module.get<LicaoIconeService>(LicaoIconeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
