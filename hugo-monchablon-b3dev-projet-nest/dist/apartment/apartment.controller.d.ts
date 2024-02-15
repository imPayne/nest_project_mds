import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
export declare class ApartmentController {
    private readonly apartmentService;
    constructor(apartmentService: ApartmentService);
    create(createApartmentDto: CreateApartmentDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateApartmentDto: any): string;
    remove(id: string): string;
}
