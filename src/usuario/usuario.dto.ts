import { AutoMap } from '@automapper/classes';
import {
    IsEmail,
    IsNotEmpty,
    IsDate,
    IsString,
    IsAlphanumeric,
    IsIn,
} from 'class-validator';

export class UsuarioDTO {
    @AutoMap()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @AutoMap()
    @IsDate()
    dataNascimento: string | Date;

    @AutoMap()
    @IsString({
        message: 'O genero precisa ser uma string com 1 caractere.',
    })
    @IsIn(['F', 'M'], {
        message:
            'Os valores aceitos são somente M para masculino e F para feminino.',
    })
    genero: 'F' | 'M';

    @AutoMap()
    primeiroNome: string;

    @AutoMap()
    segundoNome: string;

    @AutoMap()
    @IsAlphanumeric(null, {
        message: 'A senha precisa ser alfanúmerica.',
    })
    senha: string;

    @AutoMap()
    slug: string;

    @AutoMap()
    enderecoId: number;

    @AutoMap()
    nivelId: number;
}

export interface CreateUsuarioDto {
    email: string;
    dataNascimento: string | Date;
    genero: string;
    primeiroNome: string;
    segundoNome: string;
    senha: string;
    slug: string;
    enderecoId: number;
    nivelId: number;
}

export interface UpdateUsuarioDto {
    email: string;
    dataNascimento: Date;
    genero: string;
    primeiroNome: string;
    segundoNome: string;
    senha: string;
    slug: string;
    enderecoId: number;
    nivelId: number;
}
