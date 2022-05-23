import { PartialType } from '@nestjs/mapped-types';
import { CreateFotoPerfilDto } from './create-foto-perfil.dto';

export class UpdateFotoPerfilDto extends PartialType(CreateFotoPerfilDto) {}
