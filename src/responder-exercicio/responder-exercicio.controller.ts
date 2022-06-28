import {
    Body,
    Controller,
    Get,
    Post,
    Query,
    Request,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ResponderExercicioService } from './responder-exercicio.service';

@Controller('responder-exercicio')
export class ResponderExercicioController {
    constructor(
        private readonly exerciciosService: ResponderExercicioService,
    ) {}

    // @Post()
    // create(@Body() createExercicioDto: CreateExercicioDto) {
    //     return this.exerciciosService.create(createExercicioDto);
    // }

    @Post('responder')
    @UseGuards(JwtAuthGuard)
    async responder(@Request() req, @Body() dto: { repostaId: number }) {
        const usuarioId = req.user.id;

        return this.exerciciosService.responder(+dto.repostaId, usuarioId);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll(@Request() req, @Query() query: { exercicioId: number }) {
        const usuarioId = req.user.id;

        return this.exerciciosService.findAll(usuarioId, query);
    }

    // @Get(':id')
    // findOne(@Param('id') id: string) {
    //     return this.exerciciosService.findOne(+id);
    // }

    // @Get(':id/ver_resposta')
    // verResposta(@Param('id') id: string) {
    //     return this.exerciciosService.verReposta(+id);
    // }

    // @Patch(':id')
    // update(
    //     @Param('id') id: string,
    //     @Body() updateExercicioDto: UpdateExercicioDto,
    // ) {
    //     return this.exerciciosService.update(+id, updateExercicioDto);
    // }

    // @Delete(':id')
    // remove(@Param('id') id: string) {
    //     return this.exerciciosService.remove(+id);
    // }
}
