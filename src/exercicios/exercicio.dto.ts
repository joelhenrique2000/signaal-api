export interface CreateExercicioDto {
    licaoId: number;
    enunciado: string;
    qtdPontosGanho: number;
}

export interface UpdateExercicioDto {
    licaoId?: number;
    enunciado: string;
    qtdPontosGanho: number;
}
