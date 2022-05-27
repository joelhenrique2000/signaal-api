import { Mapper } from '@automapper/core';
import { InjectMapper, MapInterceptor, MapPipe } from '@automapper/nestjs';
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    UsePipes,
    ValidationPipe,
    UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

import { CreateUsuarioDto, UpdateUsuarioDto, UsuarioDTO } from './usuario.dto';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('usuario')
export class UsuarioController {
    constructor(
        private readonly usuarioService: UsuarioService,
        @InjectMapper() private readonly mapper: Mapper,
    ) {}

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    create(@Body() dto: UsuarioDTO) {
        const usuario = this.mapper.map(dto, UsuarioDTO, Usuario);

        return this.usuarioService.create(usuario);
    }

    @Get()
    @UseGuards(JwtAuthGuard)
    findAll() {
        return this.usuarioService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.usuarioService.findOne(id);
    }

    @Get(':id')
    findOneByEmail(@Param('id') email: string) {
        return this.usuarioService.findOneByEmail(email);
    }

    @Patch(':id')
    update(
        @Param('id') id: number,
        @Body() updateUsuarioDto: UpdateUsuarioDto,
    ) {
        return this.usuarioService.update(id, updateUsuarioDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.usuarioService.remove(id);
    }
}
