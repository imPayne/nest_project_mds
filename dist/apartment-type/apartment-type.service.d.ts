import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';
import { UpdateApartmentTypeDto } from './dto/update-apartment-type.dto';
import { BaseService } from 'src/@core/base-service';
import { ApartmentTypeEntity } from './entities/apartment-type.entity';
import { DataSource, Repository } from 'typeorm';
export declare class ApartmentTypeService extends BaseService<ApartmentTypeEntity> {
    protected readonly repository: Repository<ApartmentTypeEntity>;
    protected readonly dataSource: DataSource;
    constructor(repository: Repository<ApartmentTypeEntity>, dataSource: DataSource);
    create(createApartmentTypeDto: CreateApartmentTypeDto): Promise<ApartmentTypeEntity>;
    findAll(): Promise<ApartmentTypeEntity[]>;
    findOne(id: number): Promise<ApartmentTypeEntity>;
    update(id: number, updateApartmentTypeDto: UpdateApartmentTypeDto): Promise<ApartmentTypeEntity>;
    remove(id: number): Promise<ApartmentTypeEntity>;
}
