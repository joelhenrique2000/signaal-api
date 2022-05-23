import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LicaoIconeService } from './licao-icone.service';
import { CreateLicaoIconeDto } from './dto/create-licao-icone.dto';
import { UpdateLicaoIconeDto } from './dto/update-licao-icone.dto';

@Controller('licao-icone')
export class LicaoIconeController {
  constructor(private readonly licaoIconeService: LicaoIconeService) {}

  @Post()
  create(@Body() createLicaoIconeDto: CreateLicaoIconeDto) {
    return this.licaoIconeService.create(createLicaoIconeDto);
  }

  @Get()
  findAll() {
    return this.licaoIconeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.licaoIconeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLicaoIconeDto: UpdateLicaoIconeDto) {
    return this.licaoIconeService.update(+id, updateLicaoIconeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.licaoIconeService.remove(+id);
  }
}
