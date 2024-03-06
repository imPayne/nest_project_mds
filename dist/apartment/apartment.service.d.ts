import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { changeOwnerDto } from './dto/change-owner.dto';
import { addTenantsDto } from './dto/add-tenants.dto';
import { BaseService } from 'src/@core/base-service';
import { ApartmentEntity } from './entities/apartment.entity';
import { DataSource, Repository } from 'typeorm';
import { BuildingService } from 'src/building/building.service';
import { ApartmentTypeService } from 'src/apartment-type/apartment-type.service';
import { ApartmentOptionService } from 'src/apartment-option/apartment-option.service';
import { OwnerService } from 'src/owner/owner.service';
import { TenantService } from 'src/tenant/tenant.service';
export declare class ApartmentService extends BaseService<ApartmentEntity> {
    protected readonly repository: Repository<ApartmentEntity>;
    protected readonly buildingService: BuildingService;
    protected readonly apartmentTypeService: ApartmentTypeService;
    protected readonly apartmentOptionService: ApartmentOptionService;
    protected readonly ownerService: OwnerService;
    protected readonly tenantService: TenantService;
    protected readonly dataSource: DataSource;
    constructor(repository: Repository<ApartmentEntity>, buildingService: BuildingService, apartmentTypeService: ApartmentTypeService, apartmentOptionService: ApartmentOptionService, ownerService: OwnerService, tenantService: TenantService, dataSource: DataSource);
    create(createApartmentDto: CreateApartmentDto): Promise<ApartmentEntity>;
    changeOwner(id: number, changeOwnerDto: changeOwnerDto): Promise<any>;
    addTenant(id: number, addTenant: addTenantsDto): Promise<ApartmentEntity>;
    findAll(): Promise<ApartmentEntity[]>;
    findOne(id: number): Promise<ApartmentEntity>;
    update(id: number, updateApartmentDto: UpdateApartmentDto): Promise<ApartmentEntity>;
    remove(id: number): Promise<ApartmentEntity>;
}
