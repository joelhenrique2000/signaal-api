import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArquivoExercicioService } from './arquivo-exercicio.service';
import { CreateArquivoExercicioDto } from './dto/create-arquivo-exercicio.dto';
import { UpdateArquivoExercicioDto } from './dto/update-arquivo-exercicio.dto';

@Controller('arquivo-exercicio')
export class ArquivoExercicioController {
  constructor(private readonly arquivoExercicioService: ArquivoExercicioService) {}

  @Post()
  create(@Body() createArquivoExercicioDto: CreateArquivoExercicioDto) {
    return this.arquivoExercicioService.create(createArquivoExercicioDto);
  }

  @Get()
  findAll() {
    return this.arquivoExercicioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arquivoExercicioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateArquivoExercicioDto: UpdateArquivoExercicioDto) {
    return this.arquivoExercicioService.update(+id, updateArquivoExercicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arquivoExercicioService.remove(+id);
  }
}
