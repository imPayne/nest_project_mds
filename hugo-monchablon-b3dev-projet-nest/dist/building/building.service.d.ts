import { CreateBuildingDto } from './dto/create-building.dto';
import { BuildingEntity } from '../@entities/building.entity';
import { Repository } from 'typeorm';
import { AddressService } from "../address/address.service";
export declare class BuildingService {
    protected readonly repository: Repository<BuildingEntity>;
    private readonly addressService;
    constructor(repository: Repository<BuildingEntity>, addressService: AddressService);
    create(createBuilding: CreateBuildingDto): Promise<BuildingEntity>;
    findAll(): Promise<BuildingEntity[]>;
    findOne(id: number): Promise<BuildingEntity>;
    update(id: number, updateBuildingDto: any): Promise<BuildingEntity>;
    remove(id: number): Promise<string>;
}
