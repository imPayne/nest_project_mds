import { CreateBuildingDto } from './dto/create-building.dto';
import { BuildingEntity } from '../@entities/building.entity';
import { Repository } from 'typeorm';
export declare class BuildingService {
    protected readonly repository: Repository<BuildingEntity>;
    constructor(repository: Repository<BuildingEntity>);
    create(createBuilding: CreateBuildingDto): Promise<BuildingEntity>;
    findAll(): Promise<BuildingEntity[]>;
    findOne(id: number): Promise<BuildingEntity>;
    update(id: number, updateBuildingDto: any): Promise<BuildingEntity>;
    remove(id: number): Promise<string>;
}
