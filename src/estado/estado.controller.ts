import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateEstadoDto, UpdateEstadoDto } from './estado.dto';
import { EstadoService } from './estado.service';

@Controller('estado')
export class EstadoController {
    constructor(private readonly estadoService: EstadoService) {}

    @Post()
    create(@Body() createEstadoDto: CreateEstadoDto) {
        return this.estadoService.create(createEstadoDto);
    }

    @Get()
    findAll() {
        return this.estadoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.estadoService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateEstadoDto: UpdateEstadoDto) {
        return this.estadoService.update(+id, updateEstadoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.estadoService.remove(+id);
    }
}
