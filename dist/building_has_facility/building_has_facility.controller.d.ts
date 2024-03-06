import { BuildingHasFacilityService } from './building_has_facility.service';
import { CreateBuildingHasFacilityDto } from './dto/create-building_has_facility.dto';
import { UpdateBuildingHasFacilityDto } from './dto/update-building_has_facility.dto';
export declare class BuildingHasFacilityController {
    private readonly buildingHasFacilityService;
    constructor(buildingHasFacilityService: BuildingHasFacilityService);
    create(createBuildingHasFacilityDto: CreateBuildingHasFacilityDto): Promise<import("./entities/building_has_facility.entity").BuildingHasFacilityEntity>;
    findAll(): Promise<import("./entities/building_has_facility.entity").BuildingHasFacilityEntity[]>;
    findOne(id: string): Promise<import("./entities/building_has_facility.entity").BuildingHasFacilityEntity>;
    update(id: string, updateBuildingHasFacilityDto: UpdateBuildingHasFacilityDto): Promise<import("./entities/building_has_facility.entity").BuildingHasFacilityEntity>;
    remove(id: string): Promise<import("./entities/building_has_facility.entity").BuildingHasFacilityEntity>;
}
