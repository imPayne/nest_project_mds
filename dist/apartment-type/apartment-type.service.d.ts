import { CreateApartmentTypeDto } from './dto/create-apartment-type.dto';
import { UpdateApartmentTypeDto } from './dto/update-apartment-type.dto';
export declare class ApartmentTypeService {
    create(createApartmentTypeDto: CreateApartmentTypeDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateApartmentTypeDto: UpdateApartmentTypeDto): string;
    remove(id: number): string;
}
