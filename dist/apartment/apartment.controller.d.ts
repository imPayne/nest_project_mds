import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
export declare class ApartmentController {
    private readonly apartmentService;
    constructor(apartmentService: ApartmentService);
    create(createApartmentDto: CreateApartmentDto): Promise<import("../@entities/apartment.entity").ApartmentEntity>;
    findAll(): Promise<import("../@entities/apartment.entity").ApartmentEntity[]>;
    findOne(id: string): Promise<import("../@entities/apartment.entity").ApartmentEntity>;
    update(id: string, updateApartmentDto: any): Promise<import("../@entities/apartment.entity").ApartmentEntity>;
    remove(id: string): Promise<import("../@entities/apartment.entity").ApartmentEntity>;
}
