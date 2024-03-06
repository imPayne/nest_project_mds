import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { PersonEntity } from 'src/person/entities/person.entity';
export declare class TenantEntity extends PersonEntity {
    apartment: ApartmentEntity;
}
