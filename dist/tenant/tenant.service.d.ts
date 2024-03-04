import { CreateTenantDto } from './dto/create-tenant.dto';
import { Repository } from 'typeorm';
import { TenantEntity } from '../@entities/tenant.entity';
export declare class TenantService {
    protected readonly repository: Repository<TenantEntity>;
    constructor(repository: Repository<TenantEntity>);
    create(createTenantDto: CreateTenantDto): Promise<TenantEntity>;
    findAll(): Promise<TenantEntity[]>;
    findOne(id: number): Promise<TenantEntity[]>;
    update(id: number, updateTenantDto: any): Promise<{
        id: any;
        isPrimaryTenant: any;
        apartment: any;
    } & TenantEntity>;
    remove(id: number): Promise<{
        id: number;
    } & TenantEntity>;
}
