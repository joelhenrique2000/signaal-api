import { AutoMap } from '@automapper/classes';
import {
    IsEmail,
    IsNotEmpty,
    IsDate,
    IsString,
    IsAlphanumeric,
    IsAlpha,
    IsIn,
    IsInt,
    Min,
    Max,
} from 'class-validator';

export class UsuarioDTO {
    @AutoMap()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @AutoMap()
    // @IsDate()
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
    // @IsAlpha()
    primeiroNome: string;

    @AutoMap()
    // @IsAlpha()
    segundoNome: string;

    @AutoMap()
    senha: string;

    @AutoMap()
    // @IsAlpha()
    slug: string;

    @AutoMap()
    @IsInt()
    enderecoId: number;

    @AutoMap()
    @Min(1)
    @Max(100)
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
