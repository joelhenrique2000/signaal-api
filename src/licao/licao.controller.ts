import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateLicaoDto, UpdateLicaoDto } from './licao.dto';
import { LicaoService } from './licao.service';

@Controller('licao')
export class LicaoController {
    constructor(private readonly licaoService: LicaoService) {}

    @Post()
    create(@Body() createLicaoDto: CreateLicaoDto) {
        return this.licaoService.create(createLicaoDto);
    }

    @Get()
    findAll() {
        return this.licaoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.licaoService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateLicaoDto: UpdateLicaoDto) {
        return this.licaoService.update(+id, updateLicaoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.licaoService.remove(+id);
    }

    @Get(':id/quantidade_exercicios')
    quantidadeExerciciosByLicaoId(@Param('id') id: string) {
        return this.licaoService.quantidadeExerciciosByLicaoId(+id);
    }

    @Get(':id/quantidade_exercicios_respondidos')
    quantidadeExerciciosRespondidosByLicaoId(@Param('id') id: string) {
        return this.licaoService.quantidadeExerciciosRespondidosByLicaoId(+id);
    }

    @Get(':id/porcentagem_exercicios_respondidos')
    porcentagemExerciciosRespondidosByLicaoId(@Param('id') id: string) {
        return this.licaoService.porcentagemExerciciosRespondidosByLicaoId(+id);
    }

    @Get(':id/exercicio_disponivel')
    exercicioDisponivel(@Param('id') id: string) {
        return this.licaoService.exercicioDisponivelByLicaoId(+id);
    }
}
