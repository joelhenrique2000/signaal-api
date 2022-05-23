import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateNivelDto, UpdateNivelDto } from './nivel.dto';
import { NivelService } from './nivel.service';

@Controller('nivel')
export class NivelController {
    constructor(private readonly nivelService: NivelService) {}

    @Post()
    create(@Body() createNivelDto: CreateNivelDto) {
        return this.nivelService.create(createNivelDto);
    }

    @Get()
    findAll() {
        return this.nivelService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.nivelService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateNivelDto: UpdateNivelDto) {
        return this.nivelService.update(+id, updateNivelDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.nivelService.remove(+id);
    }
}
