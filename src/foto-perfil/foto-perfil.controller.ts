import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FotoPerfilService } from './foto-perfil.service';
import { CreateFotoPerfilDto } from './dto/create-foto-perfil.dto';
import { UpdateFotoPerfilDto } from './dto/update-foto-perfil.dto';

@Controller('foto-perfil')
export class FotoPerfilController {
  constructor(private readonly fotoPerfilService: FotoPerfilService) {}

  @Post()
  create(@Body() createFotoPerfilDto: CreateFotoPerfilDto) {
    return this.fotoPerfilService.create(createFotoPerfilDto);
  }

  @Get()
  findAll() {
    return this.fotoPerfilService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fotoPerfilService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFotoPerfilDto: UpdateFotoPerfilDto) {
    return this.fotoPerfilService.update(+id, updateFotoPerfilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fotoPerfilService.remove(+id);
  }
}
