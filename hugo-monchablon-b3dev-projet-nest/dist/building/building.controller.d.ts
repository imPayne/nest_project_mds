import { BuildingService } from './building.service';
import { CreateBuildingDto } from './dto/create-building.dto';
export declare class BuildingController {
    private readonly buildingService;
    constructor(buildingService: BuildingService);
    create(createBuildingDto: CreateBuildingDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBuildingDto: any): string;
    remove(id: string): string;
}
