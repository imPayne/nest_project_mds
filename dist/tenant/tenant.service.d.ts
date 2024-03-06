import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { TenantEntity } from './entities/tenant.entity';
import { DataSource, Repository } from 'typeorm';
import { BaseService } from 'src/@core/base-service';
import { PersonService } from 'src/person/person.service';
export declare class TenantService extends BaseService<TenantEntity> {
    private readonly repository;
    private readonly personService;
    protected readonly dataSource: DataSource;
    constructor(repository: Repository<TenantEntity>, personService: PersonService, dataSource: DataSource);
    create(createTenantDto: CreateTenantDto): Promise<TenantEntity>;
    findAll(): Promise<TenantEntity[]>;
    findOne(id: number): Promise<TenantEntity>;
    update(id: number, updateTenantDto: UpdateTenantDto): Promise<TenantEntity>;
    remove(id: number): Promise<TenantEntity>;
}
