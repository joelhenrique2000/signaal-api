import { Injectable } from '@nestjs/common';
import { CreateRoleDto, UpdateRoleDto } from './role.dto';
import { RoleRepository } from './role.repository';

@Injectable()
export class RoleService {
    roleRepository: RoleRepository;

    constructor() {
        this.roleRepository = new RoleRepository();
    }

    create(createRoleDto: CreateRoleDto) {
        return this.roleRepository.create(createRoleDto);
    }

    findAll() {
        return this.roleRepository.findAll();
    }

    findOne(id: number) {
        return this.roleRepository.findOne(id);
    }

    update(id: number, updateRoleDto: UpdateRoleDto) {
        return this.roleRepository.update(id, updateRoleDto);
    }

    remove(id: number) {
        return this.roleRepository.remove(id);
    }
}
