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
}
