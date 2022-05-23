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
