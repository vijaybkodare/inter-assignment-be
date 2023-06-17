import { Injectable, Inject } from '@nestjs/common';
import { Employee } from './employee.entity';
import { EmployeeDto } from './dto/employee.dto';
import { EMPLOYEE_REPOSITORY } from '../../core/constants';

@Injectable()
export class EmployeeService {
    constructor(@Inject(EMPLOYEE_REPOSITORY) private readonly repository: typeof Employee) { }

    async create(entity: EmployeeDto): Promise<Employee> {
        return await this.repository.create<Employee>(entity);
    }

    async delete(id: number): Promise<number> {
        return await this.repository.destroy({where:{id}});;
    }

    async update(entity: EmployeeDto): Promise<number[]> {
        console.log(entity);
        return await this.repository.update<Employee>(
            {
                name: entity.name, 
                address: entity.address,
            }, { where: { id:entity.id } });
    }

    async findOneById(id: number): Promise<Employee> {
        return await this.repository.findOne<Employee>({ where: { id } });
    }

    async getAll(): Promise<Employee[]> {
        return await this.repository.findAll<Employee>();
    }
}
