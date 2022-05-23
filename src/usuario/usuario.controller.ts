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
    UseInterceptors,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max,
} from 'class-validator';
import { mapper } from 'src/mappings/mapper';
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
    findAll() {
        return this.usuarioService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usuarioService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateUsuarioDto: UpdateUsuarioDto,
    ) {
        return this.usuarioService.update(+id, updateUsuarioDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usuarioService.remove(+id);
    }
}
