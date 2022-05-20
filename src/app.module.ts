import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExerciciosModule } from './exercicios/exercicios.module';
import { LicaoModule } from './licao/licao.module';

@Module({
    imports: [ExerciciosModule, LicaoModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
