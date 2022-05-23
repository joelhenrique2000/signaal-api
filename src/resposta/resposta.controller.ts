import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateRespostaDto, UpdateRespostaDto } from './resposta.dto';
import { RespostaService } from './resposta.service';

@Controller('resposta')
export class RespostaController {
    constructor(private readonly respostaService: RespostaService) {}

    @Post()
    create(@Body() createRespostaDto: CreateRespostaDto) {
        return this.respostaService.create(createRespostaDto);
    }

    @Get()
    findAll() {
        return this.respostaService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.respostaService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateRespostaDto: UpdateRespostaDto,
    ) {
        return this.respostaService.update(+id, updateRespostaDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.respostaService.remove(+id);
    }
}
