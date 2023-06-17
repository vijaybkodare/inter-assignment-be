import { Controller, Body, Get, Post, Delete, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { EmployeeDto } from '../employee/dto/employee.dto';


@Controller('employee')
export class EmployeeController {
    constructor(private service: EmployeeService) {}

    @Get()
    getHello(): string {
        return "vkodare";
    }

    @Post('create')
    async create(@Body() entity: EmployeeDto) {
        return await this.service.create(entity);
    }

    @Post('update')
    async update(@Body() entity: EmployeeDto) {
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
