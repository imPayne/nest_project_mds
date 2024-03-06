import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { UpdateApartmentDto } from './dto/update-apartment.dto';
import { changeOwnerDto } from './dto/change-owner.dto';
import { addTenantsDto } from './dto/add-tenants.dto';
export declare class ApartmentController {
    private readonly apartmentService;
    constructor(apartmentService: ApartmentService);
    create(createApartmentDto: CreateApartmentDto): Promise<import("./entities/apartment.entity").ApartmentEntity>;
    findAll(): Promise<import("./entities/apartment.entity").ApartmentEntity[]>;
    findOne(id: string): Promise<import("./entities/apartment.entity").ApartmentEntity>;
    changeOwner(id: string, changeOwnerDto: changeOwnerDto): Promise<any>;
    addTenant(id: string, addTenantsDto: addTenantsDto): Promise<import("./entities/apartment.entity").ApartmentEntity>;
    update(id: string, updateApartmentDto: UpdateApartmentDto): Promise<import("./entities/apartment.entity").ApartmentEntity>;
    remove(id: string): Promise<import("./entities/apartment.entity").ApartmentEntity>;
}
