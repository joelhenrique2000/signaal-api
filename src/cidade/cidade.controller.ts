import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateCidadeDto, UpdateCidadeDto } from './cidade.dto';
import { CidadeService } from './cidade.service';

@Controller('cidade')
export class CidadeController {
    constructor(private readonly cidadeService: CidadeService) {}

    @Post()
    create(@Body() createCidadeDto: CreateCidadeDto) {
        return this.cidadeService.create(createCidadeDto);
    }

    @Get()
    findAll() {
        return this.cidadeService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.cidadeService.findOne(+id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCidadeDto: UpdateCidadeDto) {
        return this.cidadeService.update(+id, updateCidadeDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.cidadeService.remove(+id);
    }
}
