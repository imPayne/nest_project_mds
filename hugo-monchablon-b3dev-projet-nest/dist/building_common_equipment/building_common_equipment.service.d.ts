import { CreateBuildingCommonEquipmentDto } from './dto/create-building_common_equipment.dto';
export declare class BuildingCommonEquipmentService {
    create(createBuildingCommonEquipmentDto: CreateBuildingCommonEquipmentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBuildingCommonEquipmentDto: any): string;
    remove(id: number): string;
}
