import { Organization } from './organization.entity';
import { ORGANIZATION_REPOSITORY } from '../../core/constants';

export const organizationsProviders = [{
    provide: ORGANIZATION_REPOSITORY,
    useValue: Organization,
}];