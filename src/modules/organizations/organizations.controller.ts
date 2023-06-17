import { Controller, Body, Get, Post, Delete, Param } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationDto } from '../organizations/dto/organization.dto';


@Controller('organizations')
export class OrganizationsController {
    constructor(private service: OrganizationsService) {}

    @Get()
    getHello(): string {
        return "vkodare";
    }

    @Post('create')
    async create(@Body() entity: OrganizationDto) {
        return await this.service.create(entity);
    }

    @Post('update')
    async update(@Body() entity: OrganizationDto) {
        return await this.service.update(entity);
    }

    @Get('getall')
    async getAll() {
        return await this.service.getAll();
    }

    @Delete('delete/:id')
    async delete(@Param('id') id: number) {
        return await this.service.delete(id);
    }
}
