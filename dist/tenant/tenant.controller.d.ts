import { TenantService } from './tenant.service';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
export declare class TenantController {
    private readonly tenantService;
    constructor(tenantService: TenantService);
    create(createTenantDto: CreateTenantDto): Promise<import("../@entities/tenant.entity").TenantEntity>;
    findAll(): Promise<import("../@entities/tenant.entity").TenantEntity[]>;
    findOne(id: string): Promise<import("../@entities/tenant.entity").TenantEntity[]>;
    update(id: string, updateTenantDto: UpdateTenantDto): Promise<{
        id: any;
        isPrimaryTenant: any;
        apartment: any;
    } & import("../@entities/tenant.entity").TenantEntity>;
    remove(id: string): Promise<{
        id: number;
    } & import("../@entities/tenant.entity").TenantEntity>;
}
