import { BuildingEntity } from "./building.entity";
import { CommonEquipmentEntity } from "./common_equipment.entity";
export declare class BuildingToCommonEquipment {
    id: number;
    building: BuildingEntity;
    commonEquipment: CommonEquipmentEntity;
    lastInspection?: string;
}
