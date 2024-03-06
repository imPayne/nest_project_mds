import { BuildingEntity } from "src/building/entities/building.entity";
import { CommonFacilityEntity } from "src/common-facility/entities/common-facility.entity";
export declare class CreateBuildingHasFacilityDto {
    renovationDate: Date;
    building: BuildingEntity;
    facility: CommonFacilityEntity;
}
