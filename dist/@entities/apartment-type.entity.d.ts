import { ApartmentEntity } from './apartment.entity';
export declare class ApartmentTypeEntity {
    id: number;
    type: string;
    maxOccupants: number;
    apartments: ApartmentEntity[];
}
