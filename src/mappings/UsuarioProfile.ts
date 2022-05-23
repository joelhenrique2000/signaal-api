import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { Usuario } from 'src/usuario/usuario.entity';
import { UsuarioDTO } from 'src/usuario/usuario.dto';

@Injectable()
export class UsuarioProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, Usuario, UsuarioDTO);
            createMap(mapper, UsuarioDTO, Usuario);
        };
    }
}
