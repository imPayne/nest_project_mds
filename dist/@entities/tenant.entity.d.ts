import { ApartmentEntity } from './apartment.entity';
import { PersonEntity } from './person.entity';
export declare class TenantEntity extends PersonEntity {
    id: number;
    isPrimaryTenant: boolean;
    apartment: ApartmentEntity;
}
