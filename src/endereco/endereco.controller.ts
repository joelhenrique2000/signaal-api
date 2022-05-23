import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { CreateEnderecoDto, UpdateEnderecoDto } from './endereco.dto';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
    constructor(private readonly enderecoService: EnderecoService) {}

    @Post()
    create(@Body() createEnderecoDto: CreateEnderecoDto) {
        return this.enderecoService.create(createEnderecoDto);
    }

    @Get()
    findAll() {
        return this.enderecoService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.enderecoService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateEnderecoDto: UpdateEnderecoDto,
    ) {
        return this.enderecoService.update(+id, updateEnderecoDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.enderecoService.remove(+id);
    }
}
