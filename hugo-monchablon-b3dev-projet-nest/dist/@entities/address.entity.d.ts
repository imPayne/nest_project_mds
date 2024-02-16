import { BuildingEntity } from './building.entity';
export declare class AddressEntity {
    id: number;
    streetNumber: string;
    street: string;
    zipCode: string;
    city: string;
    building: BuildingEntity;
}
