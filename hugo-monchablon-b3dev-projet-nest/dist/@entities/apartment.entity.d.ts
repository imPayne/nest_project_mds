import { OwnerEntity } from './owner.entity';
import { BuildingEntity } from './building.entity';
import { ApartmentTypeEntity } from './apartment-type.entity';
import { OptionEntity } from './option.entity';
import { TenantEntity } from "./tenant.entity";
export declare class ApartmentEntity {
    id: number;
    doorNumber: string;
    floor: number;
    owner: OwnerEntity;
    building: BuildingEntity;
    apartmentType: ApartmentTypeEntity;
    options: OptionEntity[];
    tenants: TenantEntity[];
}
