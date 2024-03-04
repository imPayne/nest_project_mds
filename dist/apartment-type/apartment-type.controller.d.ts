import { ApartmentTypeService } from './apartment-type.service';
import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';
import { UpdateApartmentTypeDto } from './dto/update-apartment-type.dto';
export declare class ApartmentTypeController {
    private readonly apartmentTypeService;
    constructor(apartmentTypeService: ApartmentTypeService);
    create(createApartmentTypeDto: CreateApartmentTypeDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateApartmentTypeDto: UpdateApartmentTypeDto): string;
    remove(id: string): string;
}
