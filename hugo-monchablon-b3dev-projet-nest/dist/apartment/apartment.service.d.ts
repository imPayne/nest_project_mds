import { CreateApartmentDto } from './dto/create-apartment.dto';
export declare class ApartmentService {
    create(createApartmentDto: CreateApartmentDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateApartmentDto: any): string;
    remove(id: number): string;
}
