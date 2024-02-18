import { BuildingService } from './building.service';
import { CreateBuildingDto } from './dto/create-building.dto';
export declare class BuildingController {
    private readonly buildingService;
    constructor(buildingService: BuildingService);
    create(createBuildingDto: CreateBuildingDto): Promise<import("../@entities/building.entity").BuildingEntity>;
    findAll(): Promise<import("../@entities/building.entity").BuildingEntity[]>;
    findOne(id: string): Promise<import("../@entities/building.entity").BuildingEntity>;
    update(id: string, updateBuildingDto: any): Promise<import("../@entities/building.entity").BuildingEntity>;
    remove(id: string): Promise<string>;
}
