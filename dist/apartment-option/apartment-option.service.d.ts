import { CreateApartmentOptionDto } from './dto/create-apartment-option.dto';
import { UpdateApartmentOptionDto } from './dto/update-apartment-option.dto';
import { BaseService } from 'src/@core/base-service';
import { ApartmentOptionEntity } from './entities/apartment-option.entity';
import { DataSource, Repository } from 'typeorm';
export declare class ApartmentOptionService extends BaseService<ApartmentOptionEntity> {
    protected readonly repository: Repository<ApartmentOptionEntity>;
    protected readonly dataSource: DataSource;
    constructor(repository: Repository<ApartmentOptionEntity>, dataSource: DataSource);
    create(createApartmentOptionDto: CreateApartmentOptionDto): Promise<ApartmentOptionEntity>;
    findAll(): Promise<ApartmentOptionEntity[]>;
    findOne(id: number): Promise<ApartmentOptionEntity>;
    update(id: number, updateApartmentOptionDto: UpdateApartmentOptionDto): Promise<ApartmentOptionEntity>;
    remove(id: number): Promise<ApartmentOptionEntity>;
}
