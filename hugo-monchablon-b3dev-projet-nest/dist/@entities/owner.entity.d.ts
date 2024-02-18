import { ApartmentEntity } from './apartment.entity';
import { PersonEntity } from './person.entity';
export declare class OwnerEntity extends PersonEntity {
    id: number;
    accountNumber: string;
    is_tva: boolean;
    apartments: ApartmentEntity[];
}
