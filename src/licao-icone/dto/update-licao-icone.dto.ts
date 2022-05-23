import { PartialType } from '@nestjs/mapped-types';
import { CreateLicaoIconeDto } from './create-licao-icone.dto';

export class UpdateLicaoIconeDto extends PartialType(CreateLicaoIconeDto) {}
