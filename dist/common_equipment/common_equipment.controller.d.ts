import { CommonEquipmentService } from './common_equipment.service';
import { CreateCommonEquipmentDto } from './dto/create-common_equipment.dto';
export declare class CommonEquipmentController {
    private readonly commonEquipmentService;
    constructor(commonEquipmentService: CommonEquipmentService);
    create(createCommonEquipmentDto: CreateCommonEquipmentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateCommonEquipmentDto: any): string;
    remove(id: string): string;
}
