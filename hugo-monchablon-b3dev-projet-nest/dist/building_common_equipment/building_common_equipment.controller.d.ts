import { BuildingCommonEquipmentService } from './building_common_equipment.service';
import { CreateBuildingCommonEquipmentDto } from './dto/create-building_common_equipment.dto';
export declare class BuildingCommonEquipmentController {
    private readonly buildingCommonEquipmentService;
    constructor(buildingCommonEquipmentService: BuildingCommonEquipmentService);
    create(createBuildingCommonEquipmentDto: CreateBuildingCommonEquipmentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBuildingCommonEquipmentDto: any): string;
    remove(id: string): string;
}
