import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateAssuntoDto, UpdateAssuntoDto } from './assunto.dto';
import { AssuntoService } from './assunto.service';

@Controller('assunto')
export class AssuntoController {
    constructor(private readonly assuntoService: AssuntoService) {}

    @Post()
    create(@Body() createAssuntoDto: CreateAssuntoDto) {
        return this.assuntoService.create(createAssuntoDto);
    }

    @Get()
    findAll() {
        return this.assuntoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.assuntoService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateAssuntoDto: UpdateAssuntoDto,
    ) {
        return this.assuntoService.update(+id, updateAssuntoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.assuntoService.remove(+id);
    }
}
