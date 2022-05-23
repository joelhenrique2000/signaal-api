import { Test, TestingModule } from '@nestjs/testing';
import { ArquivoExercicioService } from './arquivo-exercicio.service';

describe('ArquivoExercicioService', () => {
  let service: ArquivoExercicioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ArquivoExercicioService],
    }).compile();

    service = module.get<ArquivoExercicioService>(ArquivoExercicioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
