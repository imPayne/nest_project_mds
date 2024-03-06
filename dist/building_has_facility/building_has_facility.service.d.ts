import { UpdateBuildingHasFacilityDto } from './dto/update-building_has_facility.dto';
import { BaseService } from 'src/@core/base-service';
import { BuildingHasFacilityEntity } from './entities/building_has_facility.entity';
import { DataSource, Repository } from 'typeorm';
export declare class BuildingHasFacilityService extends BaseService<BuildingHasFacilityEntity> {
    protected readonly repository: Repository<BuildingHasFacilityEntity>;
    protected readonly dataSource: DataSource;
    constructor(repository: Repository<BuildingHasFacilityEntity>, dataSource: DataSource);
    create(createBuildingHasFacilityDto: BuildingHasFacilityEntity): Promise<BuildingHasFacilityEntity>;
    createwithDto(createBuildingHasFacilityDto: UpdateBuildingHasFacilityDto): Promise<BuildingHasFacilityEntity>;
    findAll(): Promise<BuildingHasFacilityEntity[]>;
    findOne(id: number): Promise<BuildingHasFacilityEntity>;
    update(id: number, updateBuildingHasFacilityDto: UpdateBuildingHasFacilityDto): Promise<BuildingHasFacilityEntity>;
    remove(id: number): Promise<BuildingHasFacilityEntity>;
}
