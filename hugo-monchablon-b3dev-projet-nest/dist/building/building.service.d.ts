import { CreateBuildingDto } from './dto/create-building.dto';
export declare class BuildingService {
    create(createBuildingDto: CreateBuildingDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBuildingDto: any): string;
    remove(id: number): string;
}
