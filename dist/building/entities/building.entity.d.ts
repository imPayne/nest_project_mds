import { AddressEntity } from 'src/address/entities/address.entity';
import { ApartmentEntity } from 'src/apartment/entities/apartment.entity';
import { CommonFacilityEntity } from 'src/common-facility/entities/common-facility.entity';
export declare class BuildingEntity {
    id: number;
    constructionDate: Date;
    apartments: ApartmentEntity[];
    facilities: CommonFacilityEntity[];
    address: AddressEntity;
}
