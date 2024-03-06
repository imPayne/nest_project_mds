import { ApartmentOptionEntity } from 'src/apartment-option/entities/apartment-option.entity';
import { ApartmentTypeEntity } from 'src/apartment-type/entities/apartment-type.entity';
import { BuildingEntity } from 'src/building/entities/building.entity';
import { OwnerEntity } from 'src/owner/entities/owner.entity';
import { TenantEntity } from 'src/tenant/entities/tenant.entity';
export declare class ApartmentEntity {
    id: number;
    floor: number;
    door: number;
    rent: number;
    building: BuildingEntity;
    type: ApartmentTypeEntity;
    owner: OwnerEntity;
    tenants: TenantEntity[];
    options: ApartmentOptionEntity[];
    principalTenant: TenantEntity | null;
}
