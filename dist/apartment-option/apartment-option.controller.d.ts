import { ApartmentOptionService } from './apartment-option.service';
import { CreateApartmentOptionDto } from './dto/create-apartment-option.dto';
import { UpdateApartmentOptionDto } from './dto/update-apartment-option.dto';
export declare class ApartmentOptionController {
    private readonly apartmentOptionService;
    constructor(apartmentOptionService: ApartmentOptionService);
    create(createApartmentOptionDto: CreateApartmentOptionDto): Promise<import("./entities/apartment-option.entity").ApartmentOptionEntity>;
    findAll(): Promise<import("./entities/apartment-option.entity").ApartmentOptionEntity[]>;
    findOne(id: string): Promise<import("./entities/apartment-option.entity").ApartmentOptionEntity>;
    update(id: string, updateApartmentOptionDto: UpdateApartmentOptionDto): Promise<import("./entities/apartment-option.entity").ApartmentOptionEntity>;
    remove(id: string): Promise<import("./entities/apartment-option.entity").ApartmentOptionEntity>;
}
