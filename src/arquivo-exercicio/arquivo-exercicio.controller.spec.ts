import { Test, TestingModule } from '@nestjs/testing';
import { ArquivoExercicioController } from './arquivo-exercicio.controller';
import { ArquivoExercicioService } from './arquivo-exercicio.service';

describe('ArquivoExercicioController', () => {
  let controller: ArquivoExercicioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArquivoExercicioController],
      providers: [ArquivoExercicioService],
    }).compile();

    controller = module.get<ArquivoExercicioController>(ArquivoExercicioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
