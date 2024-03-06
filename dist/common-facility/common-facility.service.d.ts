import { CreateCommonFacilityDto } from './dto/create-common-facility.dto';
import { UpdateCommonFacilityDto } from './dto/update-common-facility.dto';
import { CommonFacilityEntity } from './entities/common-facility.entity';
import { BaseService } from 'src/@core/base-service';
import { DataSource, Repository } from 'typeorm';
export declare class CommonFacilityService extends BaseService<CommonFacilityEntity> {
    protected readonly repository: Repository<CommonFacilityEntity>;
    protected readonly dataSource: DataSource;
    constructor(repository: Repository<CommonFacilityEntity>, dataSource: DataSource);
    create(createCommonFacilityDto: CreateCommonFacilityDto): Promise<CommonFacilityEntity>;
    findAll(): Promise<CommonFacilityEntity[]>;
    findOne(id: number): Promise<CommonFacilityEntity>;
    update(id: number, updateCommonFacilityDto: UpdateCommonFacilityDto): Promise<CommonFacilityEntity>;
    remove(id: number): Promise<CommonFacilityEntity>;
}
