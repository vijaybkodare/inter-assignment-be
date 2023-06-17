import { Injectable, Inject } from '@nestjs/common';
import { Organization } from './organization.entity';
import { OrganizationDto } from './dto/organization.dto';
import { ORGANIZATION_REPOSITORY } from '../../core/constants';

@Injectable()
export class OrganizationsService {
    constructor(@Inject(ORGANIZATION_REPOSITORY) private readonly repository: typeof Organization) { }

    async create(entity: OrganizationDto): Promise<Organization> {
        return await this.repository.create<Organization>(entity);
    }

    async delete(id: number): Promise<number> {
        return await this.repository.destroy({where:{id}});;
    }

    async update(entity: OrganizationDto): Promise<number[]> {
        console.log(entity);
        return await this.repository.update<Organization>(
            {
                name: entity.name, 
                address: entity.address,
            }, { where: { id:entity.id } });
    }

    async findOneById(id: number): Promise<Organization> {
        return await this.repository.findOne<Organization>({ where: { id } });
    }


    async getAll(): Promise<Organization[]> {
        return await this.repository.findAll<Organization>();
    }
}
