import { Injectable } from '@nestjs/common';
import { CreateLicaoIconeDto } from './dto/create-licao-icone.dto';
import { UpdateLicaoIconeDto } from './dto/update-licao-icone.dto';

@Injectable()
export class LicaoIconeService {
  create(createLicaoIconeDto: CreateLicaoIconeDto) {
    return 'This action adds a new licaoIcone';
  }

  findAll() {
    return `This action returns all licaoIcone`;
  }

  findOne(id: number) {
    return `This action returns a #${id} licaoIcone`;
  }

  update(id: number, updateLicaoIconeDto: UpdateLicaoIconeDto) {
    return `This action updates a #${id} licaoIcone`;
  }

  remove(id: number) {
    return `This action removes a #${id} licaoIcone`;
  }
}
