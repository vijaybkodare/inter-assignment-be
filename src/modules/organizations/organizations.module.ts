import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { organizationsProviders } from './organizations.providers';
import { OrganizationsController } from './organizations.controller';

@Module({
  providers: [OrganizationsService, ...organizationsProviders],
  controllers: [OrganizationsController]
})
export class OrgnizationsModule {}
