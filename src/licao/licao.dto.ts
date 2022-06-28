export interface CreateLicaoDto {
    assuntoId: number;
    licaoIconeId: number;
    licaoPreRequesitoId: number;
    titulo: string;
    descricao: string;
}

export interface UpdateLicaoDto {
    assuntoId?: number;
    licaoIconeId: number;
    licaoPreRequesitoId: number;
    titulo: string;
    descricao: string;
}

export interface ObterExercicioCompletoDto {
    licaoId: number;
    enunciado: string;
    qtdPontosGanho: number;
    repostas: [
        {
            enunciado: string;
            isRespostaCerta: boolean;
            exercicioId: number;
        },
    ];
}
