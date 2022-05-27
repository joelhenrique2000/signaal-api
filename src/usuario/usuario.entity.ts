import { AutoMap } from '@automapper/classes';

export class Usuario {
    constructor(
        id: number,
        email: string,
        dataNascimento: string | Date,
        genero: string,
        primeiroNome: string,
        segundoNome: string,
        senha: string,
        slug: string,
        enderecoId?: number,
        nivelId?: number,
    ) {
        this.id = id;
        this.email = email;
        this.dataNascimento = dataNascimento;
        this.genero = genero;
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.senha = senha;
        this.slug = slug;
        this.enderecoId = enderecoId;
        this.nivelId = nivelId;
    }

    @AutoMap()
    id: number;

    @AutoMap()
    email: string;

    @AutoMap()
    dataNascimento: string | Date;

    @AutoMap()
    genero: string;

    @AutoMap()
    primeiroNome: string;

    @AutoMap()
    segundoNome: string;

    @AutoMap()
    senha: string;

    @AutoMap()
    slug: string;

    @AutoMap()
    enderecoId: number;

    @AutoMap()
    nivelId: number;
}
