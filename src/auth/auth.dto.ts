import { AutoMap } from '@automapper/classes';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDTO {
    @AutoMap()
    @IsEmail({}, { message: 'Email é inválido' })
    email: string;

    @AutoMap()
    @IsNotEmpty({ message: 'A senha é requerida' })
    senha: string;
}
