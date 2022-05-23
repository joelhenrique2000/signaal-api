import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { ExerciciosService } from './exercicios.service';
import { CreateExercicioDto, UpdateExercicioDto } from './exercicio.dto';

@Controller('exercicio')
export class ExerciciosController {
    constructor(private readonly exerciciosService: ExerciciosService) {}

    @Post()
    create(@Body() createExercicioDto: CreateExercicioDto) {
        return this.exerciciosService.create(createExercicioDto);
    }

    @Get()
    findAll() {
        return this.exerciciosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.exerciciosService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateExercicioDto: UpdateExercicioDto,
    ) {
        return this.exerciciosService.update(+id, updateExercicioDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.exerciciosService.remove(+id);
    }
}
