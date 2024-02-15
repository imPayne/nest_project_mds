import { CreateCommonEquipmentDto } from './dto/create-common_equipment.dto';
export declare class CommonEquipmentService {
    create(createCommonEquipmentDto: CreateCommonEquipmentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateCommonEquipmentDto: any): string;
    remove(id: number): string;
}
