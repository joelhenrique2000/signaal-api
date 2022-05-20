export interface CreateLicaoDto {
    // assuntoId: number;
    licaoIconeId: number;
    // licaoPreRequesitoId: number;
    titulo: string;
    descricao: string;
}

export interface UpdateLicaoDto {
    // assuntoId?: number;
    licaoIconeId: number;
    // licaoPreRequesitoId: number;;
    titulo: string;
    descricao: string;
}
