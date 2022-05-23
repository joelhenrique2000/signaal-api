import { PrismaClient } from '@prisma/client';
import { CreateRoleDto, UpdateRoleDto } from './role.dto';

export class RoleRepository extends PrismaClient {
    async create(createRoleDto: CreateRoleDto) {
        const usuario = await this.role.create({
            data: createRoleDto,
        });

        return usuario;
    }

    async findAll() {
        return await this.role.findMany();
    }

    async findOne(id: number) {
        return await this.role.findUnique({
            where: { id },
        });
    }

    async update(id: number, updateRoleDto: UpdateRoleDto) {
        const roleAtualizado = await this.role.update({
            where: { id },
            data: updateRoleDto,
        });

        return roleAtualizado;
    }

    async remove(id: number) {
        const roleDeletado = await this.role.delete({
            where: { id },
        });

        return roleDeletado.id;
    }
}
