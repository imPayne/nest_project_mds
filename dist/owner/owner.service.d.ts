import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { OwnerEntity } from './entities/owner.entity';
import { DataSource, Repository } from 'typeorm';
import { BaseService } from 'src/@core/base-service';
import { PersonService } from 'src/person/person.service';
export declare class OwnerService extends BaseService<OwnerEntity> {
    private readonly repository;
    private readonly personService;
    protected readonly dataSource: DataSource;
    constructor(repository: Repository<OwnerEntity>, personService: PersonService, dataSource: DataSource);
    create(createOwnerDto: CreateOwnerDto): Promise<OwnerEntity>;
    findAll(): Promise<OwnerEntity[]>;
    findOne(id: number): Promise<OwnerEntity>;
    update(id: number, updateOwnerDto: UpdateOwnerDto): Promise<OwnerEntity>;
    remove(id: number): Promise<OwnerEntity>;
}
