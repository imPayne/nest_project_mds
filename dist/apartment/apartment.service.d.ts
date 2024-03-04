import { CreateApartmentDto } from './dto/create-apartment.dto';
import { Repository } from 'typeorm';
import { ApartmentEntity } from '../@entities/apartment.entity';
export declare class ApartmentService {
    protected readonly repository: Repository<ApartmentEntity>;
    constructor(repository: Repository<ApartmentEntity>);
    create(createApartmentDto: CreateApartmentDto): Promise<ApartmentEntity>;
    findAll(): Promise<ApartmentEntity[]>;
    findOne(id: number): Promise<ApartmentEntity>;
    update(id: number, updateApartmentDto: any): Promise<ApartmentEntity>;
    remove(id: number): Promise<ApartmentEntity>;
}
