export interface CreateRespostaDto {
    enunciado: string;
    isRespostaCerta: boolean;
    exercicioId: number;
}

export interface UpdateRespostaDto {
    enunciado: string;
    isRespostaCerta: boolean;
    exercicioId: number;
}
