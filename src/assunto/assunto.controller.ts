import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { LicaoService } from 'src/licao/licao.service';
import { Roles } from 'src/shared/decorator/roles.decorator';
import { Role } from 'src/shared/enums/role.enum';
import { CreateAssuntoDto, UpdateAssuntoDto } from './assunto.dto';
import { AssuntoService } from './assunto.service';

@Controller('assunto')
export class AssuntoController {
    constructor(
        private readonly assuntoService: AssuntoService,
        private readonly licaoService: LicaoService,
    ) {}

    @Post()
    @Roles(Role.Backoffice)
    @Roles(Role.Admin)
    create(@Body() createAssuntoDto: CreateAssuntoDto) {
        return this.assuntoService.create(createAssuntoDto);
    }

    @Get()
    findAll() {
        return this.assuntoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.assuntoService.findOne(+id);
    }

    @Get(':id/licao')
    async findLicaoByAssuntoId(@Param('id') id: number) {
        const licoes = await this.licaoService.findAll();
        return licoes.filter((licao) => licao.assuntoId === Number(id));
        // return this.assuntoService.findOne(+id);
    }

    @Patch(':id')
    @Roles(Role.Backoffice)
    update(
        @Param('id') id: string,
        @Body() updateAssuntoDto: UpdateAssuntoDto,
    ) {
        return this.assuntoService.update(+id, updateAssuntoDto);
    }

    @Delete(':id')
    @Roles(Role.Backoffice)
    remove(@Param('id') id: string) {
        return this.assuntoService.remove(+id);
    }
}
