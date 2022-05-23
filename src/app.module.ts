import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciciosModule } from './exercicios/exercicios.module';
import { LicaoModule } from './licao/licao.module';
import { NivelModule } from './nivel/nivel.module';
import { AssuntoModule } from './assunto/assunto.module';
import { RespostaModule } from './resposta/resposta.module';
import { LicaoIconeModule } from './licao-icone/licao-icone.module';
import { ArquivoExercicioModule } from './arquivo-exercicio/arquivo-exercicio.module';
import { FotoPerfilModule } from './foto-perfil/foto-perfil.module';
import { UsuarioModule } from './usuario/usuario.module';
import { PaisModule } from './pais/pais.module';
import { EstadoModule } from './estado/estado.module';
import { CidadeModule } from './cidade/cidade.module';
import { EnderecoModule } from './endereco/endereco.module';
import { RoleModule } from './role/role.module';

@Module({
    imports: [ExerciciosModule, LicaoModule, NivelModule, AssuntoModule, RespostaModule, LicaoIconeModule, ArquivoExercicioModule, FotoPerfilModule, UsuarioModule, PaisModule, EstadoModule, CidadeModule, EnderecoModule, RoleModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
