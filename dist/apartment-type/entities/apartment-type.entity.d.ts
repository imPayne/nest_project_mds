import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
export declare class ApartmentTypeEntity {
    id: number;
    name: string;
    capacity: number;
    apartments: ApartmentEntity[];
}
