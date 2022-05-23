import { AutoMap } from '@automapper/classes';

export class Usuario {
    // constructor(raw: any = {}) {
    //     Object.assign(this, raw);
    // }

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

    // @AutoMap()
    senha: string;

    @AutoMap()
    slug: string;

    @AutoMap()
    enderecoId: number;

    @AutoMap()
    nivelId: number;
}
