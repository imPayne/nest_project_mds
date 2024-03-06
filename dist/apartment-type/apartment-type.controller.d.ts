import { ApartmentTypeService } from './apartment-type.service';
import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';
import { UpdateApartmentTypeDto } from './dto/update-apartment-type.dto';
export declare class ApartmentTypeController {
    private readonly apartmentTypeService;
    constructor(apartmentTypeService: ApartmentTypeService);
    create(createApartmentTypeDto: CreateApartmentTypeDto): Promise<import("./entities/apartment-type.entity").ApartmentTypeEntity>;
    findAll(): Promise<import("./entities/apartment-type.entity").ApartmentTypeEntity[]>;
    findOne(id: string): Promise<import("./entities/apartment-type.entity").ApartmentTypeEntity>;
    update(id: string, updateApartmentTypeDto: UpdateApartmentTypeDto): Promise<import("./entities/apartment-type.entity").ApartmentTypeEntity>;
    remove(id: string): Promise<import("./entities/apartment-type.entity").ApartmentTypeEntity>;
}
