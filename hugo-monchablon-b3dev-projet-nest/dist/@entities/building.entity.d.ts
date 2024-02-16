import { BuildingToCommonEquipment } from './building_common_equipment.entity';
import { ApartmentEntity } from './apartment.entity';
import { AddressEntity } from './address.entity';
export declare class BuildingEntity {
    id: number;
    name: string;
    constructionDate: string;
    buildingToCommonEquipments: BuildingToCommonEquipment[];
    apartments: ApartmentEntity[];
    address: AddressEntity;
}
