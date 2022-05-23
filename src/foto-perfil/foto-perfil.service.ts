import { Injectable } from '@nestjs/common';
import { CreateFotoPerfilDto } from './dto/create-foto-perfil.dto';
import { UpdateFotoPerfilDto } from './dto/update-foto-perfil.dto';

@Injectable()
export class FotoPerfilService {
  create(createFotoPerfilDto: CreateFotoPerfilDto) {
    return 'This action adds a new fotoPerfil';
  }

  findAll() {
    return `This action returns all fotoPerfil`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fotoPerfil`;
  }

  update(id: number, updateFotoPerfilDto: UpdateFotoPerfilDto) {
    return `This action updates a #${id} fotoPerfil`;
  }

  remove(id: number) {
    return `This action removes a #${id} fotoPerfil`;
  }
}
