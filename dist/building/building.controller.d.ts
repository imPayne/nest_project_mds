import { BuildingService } from './building.service';
import { CreateBuildingDto } from './dto/create-building.dto';
import { UpdateBuildingDto } from './dto/update-building.dto';
import { AddFacilityDto } from './dto/add-facilities.dto';
export declare class BuildingController {
    private readonly buildingService;
    constructor(buildingService: BuildingService);
    create(createBuildingDto: CreateBuildingDto): Promise<import("./entities/building.entity").BuildingEntity>;
    addFacilities(id: number, AddFacilityDto: AddFacilityDto): Promise<import("./entities/building.entity").BuildingEntity>;
    findAll(): Promise<import("./entities/building.entity").BuildingEntity[]>;
    findOne(id: string): Promise<import("./entities/building.entity").BuildingEntity>;
    update(id: string, updateBuildingDto: UpdateBuildingDto): Promise<import("./entities/building.entity").BuildingEntity>;
    occupationPercentage(id: string): Promise<string>;
    numberOfApart(id: string): Promise<number>;
    nbTenants(id: string): Promise<number>;
    underOccupy(id: string): Promise<number>;
    overOccupy(id: string): Promise<number>;
    remove(id: string): Promise<import("./entities/building.entity").BuildingEntity>;
}
