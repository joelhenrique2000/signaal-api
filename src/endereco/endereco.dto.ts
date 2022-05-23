export interface CreateEnderecoDto {
    cep: string;
    cidadeId: number;
}

export interface UpdateEnderecoDto {
    cep: string;
    cidadeId: number;
}

export interface ObterEnderecoDto {
    cep: string;
    nomeCidade: string;
    nomeEstado: string;
    nomePais: string;
    cidadeId: number;
    estadoId: number;
    paisId: number;
}
